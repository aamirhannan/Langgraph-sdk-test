const data = {
    "_id": {
        "$oid": "69c3dc94d51ceb8fe4d15e21"
    },
    "resourceSpans": [
        {
            "resource": {
                "attributes": [
                    {
                        "key": "service.name",
                        "value": {
                            "stringValue": "unknown_service:node"
                        }
                    },
                    {
                        "key": "telemetry.sdk.language",
                        "value": {
                            "stringValue": "nodejs"
                        }
                    },
                    {
                        "key": "telemetry.sdk.name",
                        "value": {
                            "stringValue": "opentelemetry"
                        }
                    },
                    {
                        "key": "telemetry.sdk.version",
                        "value": {
                            "stringValue": "2.6.0"
                        }
                    }
                ],
                "droppedAttributesCount": 0
            },
            "scopeSpans": [
                {
                    "scope": {
                        "name": "@opentelemetry/instrumentation-undici",
                        "version": "0.23.0"
                    },
                    "spans": [
                        {
                            "traceId": "f62d07f5b4bd1a0b40503e0589079afb",
                            "spanId": "44caf65062e7c0c8",
                            "parentSpanId": "46f699d52e8b20c2",
                            "name": "POST",
                            "kind": 3,
                            "startTimeUnixNano": "1774443662856000000",
                            "endTimeUnixNano": "1774443663901636200",
                            "attributes": [
                                {
                                    "key": "http.request.method",
                                    "value": {
                                        "stringValue": "POST"
                                    }
                                },
                                {
                                    "key": "http.request.method_original",
                                    "value": {
                                        "stringValue": "POST"
                                    }
                                },
                                {
                                    "key": "url.full",
                                    "value": {
                                        "stringValue": "https://api.openai.com/v1/chat/completions"
                                    }
                                },
                                {
                                    "key": "url.path",
                                    "value": {
                                        "stringValue": "/v1/chat/completions"
                                    }
                                },
                                {
                                    "key": "url.query",
                                    "value": {
                                        "stringValue": ""
                                    }
                                },
                                {
                                    "key": "url.scheme",
                                    "value": {
                                        "stringValue": "https"
                                    }
                                },
                                {
                                    "key": "server.address",
                                    "value": {
                                        "stringValue": "api.openai.com"
                                    }
                                },
                                {
                                    "key": "server.port",
                                    "value": {
                                        "intValue": 443
                                    }
                                },
                                {
                                    "key": "user_agent.original",
                                    "value": {
                                        "stringValue": "langchainjs-openai/1.0.0 ((node/v20.18.0; win32; x64))"
                                    }
                                },
                                {
                                    "key": "network.peer.address",
                                    "value": {
                                        "stringValue": "172.66.0.243"
                                    }
                                },
                                {
                                    "key": "network.peer.port",
                                    "value": {
                                        "intValue": 443
                                    }
                                },
                                {
                                    "key": "http.response.status_code",
                                    "value": {
                                        "intValue": 200
                                    }
                                }
                            ],
                            "droppedAttributesCount": 0,
                            "events": [],
                            "droppedEventsCount": 0,
                            "status": {
                                "code": 0
                            },
                            "links": [],
                            "droppedLinksCount": 0,
                            "flags": 257
                        }
                    ]
                },
                {
                    "scope": {
                        "name": "@arizeai/openinference-instrumentation-openai",
                        "version": "4.0.5"
                    },
                    "spans": [
                        {
                            "traceId": "f62d07f5b4bd1a0b40503e0589079afb",
                            "spanId": "46f699d52e8b20c2",
                            "parentSpanId": "4baa03fc475a9e9e",
                            "name": "OpenAI Chat Completions",
                            "kind": 1,
                            "startTimeUnixNano": "1774443662844000000",
                            "endTimeUnixNano": "1774443663904627700",
                            "attributes": [
                                {
                                    "key": "openinference.span.kind",
                                    "value": {
                                        "stringValue": "LLM"
                                    }
                                },
                                {
                                    "key": "llm.model_name",
                                    "value": {
                                        "stringValue": "gpt-4o-mini-2024-07-18"
                                    }
                                },
                                {
                                    "key": "input.value",
                                    "value": {
                                        "stringValue": "{\"model\":\"gpt-4o-mini\",\"temperature\":0,\"stream\":false,\"messages\":[{\"role\":\"user\",\"content\":\"Classify intent: news, finance, math, or general.\\nInput: latest news\"}]}"
                                    }
                                },
                                {
                                    "key": "input.mime_type",
                                    "value": {
                                        "stringValue": "application/json"
                                    }
                                },
                                {
                                    "key": "llm.invocation_parameters",
                                    "value": {
                                        "stringValue": "{\"model\":\"gpt-4o-mini\",\"temperature\":0,\"stream\":false}"
                                    }
                                },
                                {
                                    "key": "llm.system",
                                    "value": {
                                        "stringValue": "openai"
                                    }
                                },
                                {
                                    "key": "llm.provider",
                                    "value": {
                                        "stringValue": "openai"
                                    }
                                },
                                {
                                    "key": "llm.input_messages.0.message.role",
                                    "value": {
                                        "stringValue": "user"
                                    }
                                },
                                {
                                    "key": "llm.input_messages.0.message.content",
                                    "value": {
                                        "stringValue": "Classify intent: news, finance, math, or general.\nInput: latest news"
                                    }
                                },
                                {
                                    "key": "output.value",
                                    "value": {
                                        "stringValue": "{\"id\":\"chatcmpl-DNI94WZkKQMwLJqpbcqBSnTDcCf2E\",\"object\":\"chat.completion\",\"created\":1774443666,\"model\":\"gpt-4o-mini-2024-07-18\",\"choices\":[{\"index\":0,\"message\":{\"role\":\"assistant\",\"content\":\"Intent: news\",\"refusal\":null,\"annotations\":[]},\"logprobs\":null,\"finish_reason\":\"stop\"}],\"usage\":{\"prompt_tokens\":24,\"completion_tokens\":3,\"total_tokens\":27,\"prompt_tokens_details\":{\"cached_tokens\":0,\"audio_tokens\":0},\"completion_tokens_details\":{\"reasoning_tokens\":0,\"audio_tokens\":0,\"accepted_prediction_tokens\":0,\"rejected_prediction_tokens\":0}},\"service_tier\":\"default\",\"system_fingerprint\":\"fp_ca3e7d71bf\"}"
                                    }
                                },
                                {
                                    "key": "output.mime_type",
                                    "value": {
                                        "stringValue": "application/json"
                                    }
                                },
                                {
                                    "key": "llm.output_messages.0.message.role",
                                    "value": {
                                        "stringValue": "assistant"
                                    }
                                },
                                {
                                    "key": "llm.output_messages.0.message.content",
                                    "value": {
                                        "stringValue": "Intent: news"
                                    }
                                },
                                {
                                    "key": "llm.token_count.completion",
                                    "value": {
                                        "intValue": 3
                                    }
                                },
                                {
                                    "key": "llm.token_count.prompt",
                                    "value": {
                                        "intValue": 24
                                    }
                                },
                                {
                                    "key": "llm.token_count.total",
                                    "value": {
                                        "intValue": 27
                                    }
                                },
                                {
                                    "key": "llm.token_count.prompt_details.cache_read",
                                    "value": {
                                        "intValue": 0
                                    }
                                },
                                {
                                    "key": "llm.token_count.prompt_details.audio",
                                    "value": {
                                        "intValue": 0
                                    }
                                },
                                {
                                    "key": "llm.token_count.completion_details.audio",
                                    "value": {
                                        "intValue": 0
                                    }
                                },
                                {
                                    "key": "llm.token_count.completion_details.reasoning",
                                    "value": {
                                        "intValue": 0
                                    }
                                }
                            ],
                            "droppedAttributesCount": 0,
                            "events": [],
                            "droppedEventsCount": 0,
                            "status": {
                                "code": 1
                            },
                            "links": [],
                            "droppedLinksCount": 0,
                            "flags": 257
                        }
                    ]
                },
                {
                    "scope": {
                        "name": "@arizeai/openinference-instrumentation-langchain",
                        "version": "4.0.6"
                    },
                    "spans": [
                        {
                            "traceId": "f62d07f5b4bd1a0b40503e0589079afb",
                            "spanId": "a568e8d8094e5a4a",
                            "parentSpanId": "4baa03fc475a9e9e",
                            "name": "ChatOpenAI",
                            "kind": 1,
                            "startTimeUnixNano": "1774443662843000000",
                            "endTimeUnixNano": "1774443663905482500",
                            "attributes": [
                                {
                                    "key": "openinference.span.kind",
                                    "value": {
                                        "stringValue": "LLM"
                                    }
                                },
                                {
                                    "key": "input.value",
                                    "value": {
                                        "stringValue": "{\"messages\":[[{\"lc\":1,\"type\":\"constructor\",\"id\":[\"langchain_core\",\"messages\",\"HumanMessage\"],\"kwargs\":{\"content\":\"Classify intent: news, finance, math, or general.\\nInput: latest news\",\"additional_kwargs\":{},\"response_metadata\":{}}}]]}"
                                    }
                                },
                                {
                                    "key": "input.mime_type",
                                    "value": {
                                        "stringValue": "application/json"
                                    }
                                },
                                {
                                    "key": "output.value",
                                    "value": {
                                        "stringValue": "{\"generations\":[[{\"text\":\"Intent: news\",\"message\":{\"lc\":1,\"type\":\"constructor\",\"id\":[\"langchain_core\",\"messages\",\"AIMessage\"],\"kwargs\":{\"id\":\"chatcmpl-DNI94WZkKQMwLJqpbcqBSnTDcCf2E\",\"content\":\"Intent: news\",\"additional_kwargs\":{},\"response_metadata\":{\"tokenUsage\":{\"promptTokens\":24,\"completionTokens\":3,\"totalTokens\":27},\"finish_reason\":\"stop\",\"model_provider\":\"openai\",\"model_name\":\"gpt-4o-mini-2024-07-18\",\"usage\":{\"prompt_tokens\":24,\"completion_tokens\":3,\"total_tokens\":27,\"prompt_tokens_details\":{\"cached_tokens\":0,\"audio_tokens\":0},\"completion_tokens_details\":{\"reasoning_tokens\":0,\"audio_tokens\":0,\"accepted_prediction_tokens\":0,\"rejected_prediction_tokens\":0}},\"system_fingerprint\":\"fp_ca3e7d71bf\"},\"type\":\"ai\",\"tool_calls\":[],\"invalid_tool_calls\":[],\"usage_metadata\":{\"output_tokens\":3,\"input_tokens\":24,\"total_tokens\":27,\"input_token_details\":{\"audio\":0,\"cache_read\":0},\"output_token_details\":{\"audio\":0,\"reasoning\":0}}}},\"generationInfo\":{\"finish_reason\":\"stop\"}}]],\"llmOutput\":{\"tokenUsage\":{\"promptTokens\":24,\"completionTokens\":3,\"totalTokens\":27}}}"
                                    }
                                },
                                {
                                    "key": "output.mime_type",
                                    "value": {
                                        "stringValue": "application/json"
                                    }
                                },
                                {
                                    "key": "llm.input_messages.0.message.role",
                                    "value": {
                                        "stringValue": "user"
                                    }
                                },
                                {
                                    "key": "llm.input_messages.0.message.content",
                                    "value": {
                                        "stringValue": "Classify intent: news, finance, math, or general.\nInput: latest news"
                                    }
                                },
                                {
                                    "key": "llm.output_messages.0.message.role",
                                    "value": {
                                        "stringValue": "assistant"
                                    }
                                },
                                {
                                    "key": "llm.output_messages.0.message.content",
                                    "value": {
                                        "stringValue": "Intent: news"
                                    }
                                },
                                {
                                    "key": "llm.invocation_parameters",
                                    "value": {
                                        "stringValue": "{\"model\":\"gpt-4o-mini\",\"temperature\":0,\"stream\":false}"
                                    }
                                },
                                {
                                    "key": "llm.model_name",
                                    "value": {
                                        "stringValue": "gpt-4o-mini"
                                    }
                                },
                                {
                                    "key": "llm.token_count.completion",
                                    "value": {
                                        "intValue": 3
                                    }
                                },
                                {
                                    "key": "llm.token_count.prompt",
                                    "value": {
                                        "intValue": 24
                                    }
                                },
                                {
                                    "key": "llm.token_count.total",
                                    "value": {
                                        "intValue": 27
                                    }
                                },
                                {
                                    "key": "metadata",
                                    "value": {
                                        "stringValue": "{\"ls_provider\":\"openai\",\"ls_model_name\":\"gpt-4o-mini\",\"ls_model_type\":\"chat\",\"ls_temperature\":0,\"ls_integration\":\"langchain_chat_model\",\"model\":\"gpt-4o-mini\",\"temperature\":0,\"stream\":false,\"versions\":{\"@langchain/core\":\"1.1.36\",\"@langchain/openai\":\"1.3.1\"}}"
                                    }
                                }
                            ],
                            "droppedAttributesCount": 0,
                            "events": [],
                            "droppedEventsCount": 0,
                            "status": {
                                "code": 1
                            },
                            "links": [],
                            "droppedLinksCount": 0,
                            "flags": 257
                        }
                    ]
                },
                {
                    "scope": {
                        "name": "@opentelemetry/instrumentation-http",
                        "version": "0.213.0"
                    },
                    "spans": [
                        {
                            "traceId": "f62d07f5b4bd1a0b40503e0589079afb",
                            "spanId": "aa286d18eb5cc647",
                            "parentSpanId": "4baa03fc475a9e9e",
                            "name": "GET",
                            "kind": 3,
                            "startTimeUnixNano": "1774443663911000000",
                            "endTimeUnixNano": "1774443665009918900",
                            "attributes": [
                                {
                                    "key": "http.url",
                                    "value": {
                                        "stringValue": "https://gnews.io/api/v4/search?q=latest+news&lang=en&max=3&apikey=66efa9e89a7de1f61a00a7f5cb7bb0ec"
                                    }
                                },
                                {
                                    "key": "http.method",
                                    "value": {
                                        "stringValue": "GET"
                                    }
                                },
                                {
                                    "key": "http.target",
                                    "value": {
                                        "stringValue": "/api/v4/search?q=latest+news&lang=en&max=3&apikey=66efa9e89a7de1f61a00a7f5cb7bb0ec"
                                    }
                                },
                                {
                                    "key": "net.peer.name",
                                    "value": {
                                        "stringValue": "gnews.io"
                                    }
                                },
                                {
                                    "key": "http.host",
                                    "value": {
                                        "stringValue": "gnews.io:443"
                                    }
                                },
                                {
                                    "key": "net.peer.ip",
                                    "value": {
                                        "stringValue": "157.230.179.93"
                                    }
                                },
                                {
                                    "key": "net.peer.port",
                                    "value": {
                                        "intValue": 443
                                    }
                                },
                                {
                                    "key": "http.status_code",
                                    "value": {
                                        "intValue": 200
                                    }
                                },
                                {
                                    "key": "http.status_text",
                                    "value": {
                                        "stringValue": "OK"
                                    }
                                },
                                {
                                    "key": "http.flavor",
                                    "value": {
                                        "stringValue": "1.1"
                                    }
                                },
                                {
                                    "key": "net.transport",
                                    "value": {
                                        "stringValue": "ip_tcp"
                                    }
                                }
                            ],
                            "droppedAttributesCount": 0,
                            "events": [],
                            "droppedEventsCount": 0,
                            "status": {
                                "code": 0
                            },
                            "links": [],
                            "droppedLinksCount": 0,
                            "flags": 257
                        }
                    ]
                }
            ]
        }
    ],
    "createdAt": {
        "$date": "2026-03-25T13:01:08.924Z"
    },
    "updatedAt": {
        "$date": "2026-03-25T13:01:08.924Z"
    },
    "__v": 0
}