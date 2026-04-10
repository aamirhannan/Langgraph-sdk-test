"use strict";

const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const traceloop = require("@traceloop/node-server-sdk");

class BufferedTraceExporter {
    /**
     * @param {string} baseUrl      - Full URL to your telemetry collector endpoint
     * @param {object} headers      - HTTP headers (Authorization, Content-Type …)
     * @param {number} flushDelayMs - How long to wait after the last span before
     *                                flushing. Default 6 s — covers streamed LLM
     *                                responses. Lower it in dev if you want faster
     *                                feedback.
     */
    constructor(baseUrl, headers = {}, flushDelayMs = 6000) {
        this.baseUrl = baseUrl;
        this.headers = headers;
        this.flushDelayMs = flushDelayMs;

        // { [traceId]: { spans: SpanData[], timer: NodeJS.Timeout | null } }
        this.buffer = {};
    }

    // ── OTel SpanExporter interface ────────────────────────────────────────
    export(spans, resultCallback) {
        for (const span of spans) {
            this._buffer(span);
        }
        // Signal success synchronously — the actual HTTP POST happens later
        if (resultCallback) resultCallback({ code: 0 }); // 0 = ExportResultCode.SUCCESS
    }

    _buffer(span) {
        const traceId = span.spanContext().traceId;

        if (!this.buffer[traceId]) {
            this.buffer[traceId] = { spans: [], timer: null };
        }

        this.buffer[traceId].spans.push(this._serialize(span));

        // Reset the debounce timer so we keep waiting until the trace goes quiet
        if (this.buffer[traceId].timer) {
            clearTimeout(this.buffer[traceId].timer);
        }
        this.buffer[traceId].timer = setTimeout(
            () => this._flushTrace(traceId),
            this.flushDelayMs
        );
    }

    /**
     * Recursively replaces dots in object keys with underscores.
     * MongoDB's BSON serializer rejects keys containing '.' — this converts
     * OTel keys like "gen_ai.provider.name" → "gen_ai_provider_name".
     */
    _sanitizeKeys(obj) {
        if (obj === null || obj === undefined || typeof obj !== "object") {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((item) => this._sanitizeKeys(item));
        }
        const sanitized = {};
        for (const [key, value] of Object.entries(obj)) {
            const safeKey = key.replace(/\./g, "_");
            sanitized[safeKey] = this._sanitizeKeys(value);
        }
        return sanitized;
    }

    _serialize(span) {
        const hrToMicros = ([sec, nano]) => sec * 1_000_000 + nano / 1_000;
        return {
            traceId: span.spanContext().traceId,
            parentSpanId: span.parentSpanId ?? null,
            name: span.name,
            id: span.spanContext().spanId,
            kind: span.kind,
            timestamp: hrToMicros(span.startTime),
            duration: hrToMicros(span.duration),
            attributes: this._sanitizeKeys(span.attributes),
            status: this._sanitizeKeys(span.status),
            events: this._sanitizeKeys(span.events),
            links: this._sanitizeKeys(span.links),
        };
    }

    _flushTrace(traceId) {
        const entry = this.buffer[traceId];
        if (!entry) return;

        const payload = {
            traceID: traceId,
            spans: entry.spans,
        };

        console.log(
            `[Telemetry] Flushing trace ${traceId} — ${entry.spans.length} span(s)`
        );

        // ✅ FIX 2 — lazy require: axios is loaded here, AFTER http is patched,
        //            so its internal http.request reference is the instrumented one.
        //            This also prevents the exporter's own outbound calls from
        //            creating recursive telemetry spans (combined with the
        //            ignoreOutgoingRequestHook below).
        if (this.baseUrl) {
            const axios = require("axios");
            axios
                .post(this.baseUrl, payload, { headers: this.headers })
                .then(() => {
                    console.log(`[Telemetry] ✓ Trace ${traceId} exported successfully`);
                })
                .catch((err) => {
                    console.error(
                        `[Telemetry] ✗ Failed to export trace ${traceId}:`,
                        err.message
                    );
                    if (err.response?.status === 401) {
                        console.error(
                            "[Telemetry] → HTTP 401 Unauthorized." +
                            " Check TELEMETRY_TOKEN in your .env file."
                        );
                    }
                });
        }

        // Free memory
        delete this.buffer[traceId];
    }

    // Called on process shutdown — flush everything that is still buffered
    shutdown() {
        for (const traceId of Object.keys(this.buffer)) {
            if (this.buffer[traceId].timer) {
                clearTimeout(this.buffer[traceId].timer);
            }
            this._flushTrace(traceId);
        }
        return Promise.resolve();
    }
}

// ---------------------------------------------------------------------------
// initTelemetry
// ---------------------------------------------------------------------------
function initTelemetry() {
    const baseUrl = process.env.TELEMETRY_BASE_URL || "http://localhost:4455/api/v1/telemetry";
    const token = process.env.TELEMETRY_TOKEN || "";

    const headers = { "Content-Type": "application/json" };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    registerInstrumentations({
        instrumentations: [
            new HttpInstrumentation({
                ignoreOutgoingRequestHook: (req) => {
                    const path = req.path || "";
                    const host = req.hostname || req.host || "";
                    return (
                        path.includes("/api/v1/telemetry") ||
                        host.includes("traceloop.com")
                    );
                },
                ignoreIncomingRequestHook: (req) => {
                    return req.url === "/health" || req.url === "/favicon.ico";
                },
            }),
        ],
    });

    // ✅ FIX 1 — traceloop.initialize() runs AFTER instrumentation is registered
    traceloop.initialize({
        appName: process.env.APP_NAME || "your_app_name",
        exporter: new BufferedTraceExporter(baseUrl, headers),
    });

    console.log("[Telemetry] Initialized ✓");
    console.log(`[Telemetry] Exporting to → ${baseUrl}`);
}

//   require("./telemetry");
// initTelemetry();

module.exports = { initTelemetry, BufferedTraceExporter };