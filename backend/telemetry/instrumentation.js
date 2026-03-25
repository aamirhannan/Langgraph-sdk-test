const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor, ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');
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

// 1. Setup the Tracer Provider & Configure the Console Exporter
// This will print every 'span' (step) to your terminal as a JSON object
const provider = new NodeTracerProvider({
  spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())]
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

console.log("LLM Instrumentation initialized: Exporting to Console.");