import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { BatchSpanProcessor, SpanExporter, ReadableSpan } from '@opentelemetry/sdk-trace-base';
import { ExportResult, ExportResultCode } from '@opentelemetry/core';
import { registerInstrumentations } from '@opentelemetry/instrumentation';

import { OpenAIInstrumentation } from '@arizeai/openinference-instrumentation-openai';
import { AnthropicInstrumentation } from '@arizeai/openinference-instrumentation-anthropic';
import { LangChainInstrumentation } from '@arizeai/openinference-instrumentation-langchain';

import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { UndiciInstrumentation } from '@opentelemetry/instrumentation-undici';

export interface TelemetryConfig {
  /** The endpoint to send telemetry data to (e.g. "http://localhost:4455/api/v1/telemetry") */
  endpoint: string;
  /** Authorization token/bearer for the endpoint */
  authToken?: string;
  /** Flush interval for spans in milliseconds */
  flushDelayMillis?: number;
  /** Maximum batch size of spans before exporting */
  maxExportBatchSize?: number;
  /** Inject the original libraries here to auto-instrument them */
  libraries?: {
    OpenAI?: any;
    Anthropic?: any;
    LangChainCallbackManager?: any;
  };
}

// MongoDB/BSON rejects keys containing "." or starting with "$".
export function sanitizeMongoKey(key: string): string {
  if (typeof key !== 'string') return key;
  const withoutDots = key.replace(/\./g, '_');
  return withoutDots.startsWith('$') ? `_${withoutDots.slice(1)}` : withoutDots;
}

export function sanitizeForMongo(value: any): any {
  if (Array.isArray(value)) {
    return value.map(sanitizeForMongo);
  }

  if (value && typeof value === 'object') {
    const normalized: Record<string, any> = {};
    for (const [key, nestedValue] of Object.entries(value)) {
      normalized[sanitizeMongoKey(key)] = sanitizeForMongo(nestedValue);
    }
    return normalized;
  }

  return value;
}

class FormattingExporter implements SpanExporter {
  constructor(private config: TelemetryConfig) {}

  export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void {
    const traces: Record<string, any[]> = {};
    
    // Group spans by traceId
    for (const span of spans) {
      const traceId = span.spanContext().traceId;
      if (!traces[traceId]) traces[traceId] = [];

      traces[traceId].push({
        spanId: span.spanContext().spanId,
        parentId: span.parentSpanContext?.spanId || (span as any).parentSpanId || null,
        name: span.name,
        kind: span.kind,
        startTime: span.startTime,
        duration: span.duration,
        attributes: sanitizeForMongo(span.attributes || {})
      });
    }

    // Export each completely native payload mapped to custom schema
    for (const [traceId, spanArray] of Object.entries(traces)) {
      const normalizedPayload = sanitizeForMongo({
        traceID: traceId,
        span: spanArray
      });

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (this.config.authToken) {
        headers['Authorization'] = `Bearer ${this.config.authToken}`;
      }

      fetch(this.config.endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(normalizedPayload)
      }).catch(err => console.error("Telemetry export failed:", err));
    }
    
    resultCallback({ code: ExportResultCode.SUCCESS });
  }
  
  shutdown(): Promise<void> { 
    return Promise.resolve(); 
  }
}

let provider: NodeTracerProvider | null = null;

export function initSDK(config: TelemetryConfig): NodeTracerProvider {
  if (provider) {
    console.warn("Telemetry SDK has already been initialized.");
    return provider;
  }

  provider = new NodeTracerProvider({
    spanProcessors: [
      new BatchSpanProcessor(new FormattingExporter(config), {
        scheduledDelayMillis: config.flushDelayMillis ?? 500,
        maxExportBatchSize: config.maxExportBatchSize ?? 50
      })
    ]
  });

  provider.register();

  const openAIInst = new OpenAIInstrumentation();
  const anthropicInst = new AnthropicInstrumentation();
  const langChainInst = new LangChainInstrumentation();

  if (config.libraries?.OpenAI) {
    openAIInst.manuallyInstrument(config.libraries.OpenAI);
  }
  
  if (config.libraries?.Anthropic) {
    anthropicInst.manuallyInstrument(config.libraries.Anthropic);
  }

  if (config.libraries?.LangChainCallbackManager) {
    langChainInst.manuallyInstrument(config.libraries.LangChainCallbackManager);
  }

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      openAIInst,
      anthropicInst,
      langChainInst,
      new HttpInstrumentation(),
      new UndiciInstrumentation(),
    ],
  });

  console.log(`Telemetry SDK successfully initialized. Sending traces to ${config.endpoint}`);
  return provider;
}

export function shutdownSDK(): Promise<void> {
  if (provider) {
    const tempProvider = provider;
    provider = null;
    return tempProvider.shutdown();
  }
  return Promise.resolve();
}
