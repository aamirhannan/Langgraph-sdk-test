# LangGraph Telemetry SDK

A powerful telemetry SDK designed to instrument LLM operations via OpenAI, Anthropic, and Langchain and send formatted OpenTelemetry data to your backend telemetry server.

## Installation

This SDK is self-contained. To install or link it in your project:
```sh
npm install
npm run build
```

## Setup Guide

### 1. CommonJS (CJS) Initialization

Place this initialization setup highly in your entry file (e.g., `server.js`), before you initialize the LLM instances.

```javascript
const { initSDK } = require('langgraph-telemetry-sdk');

// Optional: Pass only the libraries you wish to instrument
const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const CallbackManagerModule = require('@langchain/core/callbacks/manager');

// Initialize the telemetry
initSDK({
  endpoint: 'http://localhost:4455/api/v1/telemetry', // Your custom telemetry API endpoint
  authToken: '1234567890',                           // Optional Auth Bearer Token
  flushDelayMillis: 500,                             // Span buffer flush interval (def: 500ms)
  libraries: {
    OpenAI: OpenAI,
    Anthropic: Anthropic,
    LangChainCallbackManager: CallbackManagerModule
  }
});

console.log("Telemetry configured successfully.");
```

### 2. ES Modules (ESM) Initialization

Place this at the top of your `index.mjs` or `server.ts`.

```typescript
import { initSDK } from 'langgraph-telemetry-sdk';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import * as CallbackManagerModule from '@langchain/core/callbacks/manager';

initSDK({
  endpoint: 'http://localhost:4455/api/v1/telemetry',
  authToken: '1234567890',
  flushDelayMillis: 500,
  libraries: {
    OpenAI,
    Anthropic,
    LangChainCallbackManager: CallbackManagerModule
  }
});

console.log("Telemetry configured successfully");
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `endpoint` | string | Yes | The URL of your telemetry ingestion server |
| `authToken` | string | No | Optional Bearer token inside Auth header |
| `flushDelayMillis` | number | No | Interval to ship logs. Defaults to 500ms |
| `maxExportBatchSize` | number | No | Max payload size limits. Defaults to 50 |
| `libraries` | Object | No | Injects user-provided AI clients for OpenInference Auto-instrumentation |

## Features

- **Built-in Instrumentations**: Supports `Http`, `Undici`, `OpenAI`, `Anthropic`, and `LangChain`.
- **Auto Data Sanitation**: BSON-compliant key formatting automatically escapes problematic fields before network transit.
- **Trace Exporters**: Uses `BatchSpanProcessor` natively with an out-of-the-box FormattingExporter that sends structured payloads.
- **Dual Build Types**: Shipped as both `CJS` inside `dist/index.js` and `ESM` within `dist/index.mjs` for seamless cross-ecosystem compatibility. 
