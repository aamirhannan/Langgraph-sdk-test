const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { BatchSpanProcessor, ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

// Arize OpenInference Instrumentations
const { OpenAIInstrumentation } = require('@arizeai/openinference-instrumentation-openai');
const { AnthropicInstrumentation } = require('@arizeai/openinference-instrumentation-anthropic');
const { LangChainInstrumentation } = require('@arizeai/openinference-instrumentation-langchain');

// HTTP Instrumentations
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { UndiciInstrumentation } = require('@opentelemetry/instrumentation-undici');

// Libraries to be instrumented
const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const CallbackManagerModule = require('@langchain/core/callbacks/manager');

// MongoDB/BSON rejects keys containing "." or starting with "$".
function sanitizeMongoKey(key) {
  if (typeof key !== 'string') return key;
  const withoutDots = key.replace(/\./g, '_');
  return withoutDots.startsWith('$') ? `_${withoutDots.slice(1)}` : withoutDots;
}

function sanitizeForMongo(value) {
  if (Array.isArray(value)) {
    return value.map(sanitizeForMongo);
  }

  if (value && typeof value === 'object') {
    const normalized = {};
    for (const [key, nestedValue] of Object.entries(value)) {
      normalized[sanitizeMongoKey(key)] = sanitizeForMongo(nestedValue);
    }
    return normalized;
  }

  return value;
}

// 1. Setup the Tracer Provider & custom HTTP Exporter
class FormattingExporter {
  export(spans, resultCallback) {
    const traces = {};
    
    // Group spans by traceId
    for (const span of spans) {
      const traceId = span.spanContext().traceId;
      if (!traces[traceId]) traces[traceId] = [];

      traces[traceId].push({
        spanId: span.spanContext().spanId,
        parentId: span.parentSpanId || null,
        name: span.name,
        kind: span.kind,
        startTime: span.startTime,
        duration: span.duration,
        attributes: sanitizeForMongo(span.attributes || {})
      });
    }

    // Export each completely native payload mapped to your custom schema
    for (const [traceId, spanArray] of Object.entries(traces)) {
      const normalizedPayload = sanitizeForMongo({
        traceID: traceId,
        span: spanArray
      });

      fetch('http://localhost:4455/api/v1/telemetry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 1234567890'
        },
        body: JSON.stringify(normalizedPayload)
      }).catch(err => console.error("Telemetry export failed:", err));
    }
    
    resultCallback(0); // ExportResultCode.SUCCESS
  }
  
  shutdown() { return Promise.resolve(); }
}

const provider = new NodeTracerProvider({
  spanProcessors: [
    new BatchSpanProcessor(new FormattingExporter(), {
      scheduledDelayMillis: 500, // Flush every 500ms
      maxExportBatchSize: 50
    })
  ]
});

// 3. Register the provider globally
provider.register();

// 4. Initialize and Manually Instrument
const openAIInst = new OpenAIInstrumentation();
openAIInst.manuallyInstrument(OpenAI);

const anthropicInst = new AnthropicInstrumentation();
anthropicInst.manuallyInstrument(Anthropic);

const langChainInst = new LangChainInstrumentation();
langChainInst.manuallyInstrument(CallbackManagerModule);

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

console.log("LLM Instrumentation initialized: Exporting traces via OTLP (Batch).");