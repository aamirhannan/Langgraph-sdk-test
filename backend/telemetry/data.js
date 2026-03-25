const data = [{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@opentelemetry/instrumentation-undici',
        version: '0.23.0',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'cf71cc3aa2ecfcde',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'POST',
    id: 'b8142f1b789f16af',
    kind: 2,
    timestamp: 1774429433666000,
    duration: 2736898.8,
    attributes: {
        'http.request.method': 'POST',
        'http.request.method_original': 'POST',
        'url.full': 'https://api.openai.com/v1/chat/completions',
        'url.path': '/v1/chat/completions',
        'url.query': '',
        'url.scheme': 'https',
        'server.address': 'api.openai.com',
        'server.port': 443,
        'user_agent.original': 'langchainjs-openai/1.0.0 ((node/v20.18.0; win32; x64))',
        'network.peer.address': '172.66.0.243',
        'network.peer.port': 443,
        'http.response.status_code': 200
    },
    status: { code: 0 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@arizeai/openinference-instrumentation-openai',
        version: '4.0.5',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'c219dab72f44ba5c',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'OpenAI Chat Completions',
    id: 'cf71cc3aa2ecfcde',
    kind: 0,
    timestamp: 1774429433655000,
    duration: 2756829.9,
    attributes: {
        'openinference.span.kind': 'LLM',
        'llm.model_name': 'gpt-4o-mini-2024-07-18',
        'input.value': '{"model":"gpt-4o-mini","temperature":0,"stream":false,"messages":[{"role":"user","content":"Classify intent: news, finance, math, or general.\\nInput: latest news"}]}',
        'input.mime_type': 'application/json',
        'llm.invocation_parameters': '{"model":"gpt-4o-mini","temperature":0,"stream":false}',
        'llm.system': 'openai',
        'llm.provider': 'openai',
        'llm.input_messages.0.message.role': 'user',
        'llm.input_messages.0.message.content': 'Classify intent: news, finance, math, or general.\nInput: latest news',
        'output.value': '{"id":"chatcmpl-DNERaqh7wg6ADeKTrvt0khxpreRgk","object":"chat.completion","created":1774429438,"model":"gpt-4o-mini-2024-07-18","choices":[{"index":0,"message":{"role":"assistant","content":"Intent: news","refusal":null,"annotations":[]},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":24,"completion_tokens":3,"total_tokens":27,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}},"service_tier":"default","system_fingerprint":"fp_ca3e7d71bf"}',
        'output.mime_type': 'application/json',
        'llm.output_messages.0.message.role': 'assistant',
        'llm.output_messages.0.message.content': 'Intent: news',
        'llm.token_count.completion': 3,
        'llm.token_count.prompt': 24,
        'llm.token_count.total': 27,
        'llm.token_count.prompt_details.cache_read': 0,
        'llm.token_count.prompt_details.audio': 0,
        'llm.token_count.completion_details.audio': 0,
        'llm.token_count.completion_details.reasoning': 0
    },
    status: { code: 1 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@arizeai/openinference-instrumentation-langchain',
        version: '4.0.6',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'c219dab72f44ba5c',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'ChatOpenAI',
    id: 'd0809dc102b7404f',
    kind: 0,
    timestamp: 1774429433649000,
    duration: 2768660.1,
    attributes: {
        'openinference.span.kind': 'LLM',
        'input.value': '{"messages":[[{"lc":1,"type":"constructor","id":["langchain_core","messages","HumanMessage"],"kwargs":{"content":"Classify intent: news, finance, math, or general.\\nInput: latest news","additional_kwargs":{},"response_metadata":{}}}]]}',
        'input.mime_type': 'application/json',
        'output.value': '{"generations":[[{"text":"Intent: news","message":{"lc":1,"type":"constructor","id":["langchain_core","messages","AIMessage"],"kwargs":{"id":"chatcmpl-DNERaqh7wg6ADeKTrvt0khxpreRgk","content":"Intent: news","additional_kwargs":{},"response_metadata":{"tokenUsage":{"promptTokens":24,"completionTokens":3,"totalTokens":27},"finish_reason":"stop","model_provider":"openai","model_name":"gpt-4o-mini-2024-07-18","usage":{"prompt_tokens":24,"completion_tokens":3,"total_tokens":27,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}},"system_fingerprint":"fp_ca3e7d71bf"},"type":"ai","tool_calls":[],"invalid_tool_calls":[],"usage_metadata":{"output_tokens":3,"input_tokens":24,"total_tokens":27,"input_token_details":{"audio":0,"cache_read":0},"output_token_details":{"audio":0,"reasoning":0}}}},"generationInfo":{"finish_reason":"stop"}}]],"llmOutput":{"tokenUsage":{"promptTokens":24,"completionTokens":3,"totalTokens":27}}}',
        'output.mime_type': 'application/json',
        'llm.input_messages.0.message.role': 'user',
        'llm.input_messages.0.message.content': 'Classify intent: news, finance, math, or general.\nInput: latest news',
        'llm.output_messages.0.message.role': 'assistant',
        'llm.output_messages.0.message.content': 'Intent: news',
        'llm.invocation_parameters': '{"model":"gpt-4o-mini","temperature":0,"stream":false}',
        'llm.model_name': 'gpt-4o-mini',
        'llm.token_count.completion': 3,
        'llm.token_count.prompt': 24,
        'llm.token_count.total': 27,
        metadata: '{"ls_provider":"openai","ls_model_name":"gpt-4o-mini","ls_model_type":"chat","ls_temperature":0,"ls_integration":"langchain_chat_model","model":"gpt-4o-mini","temperature":0,"stream":false,"versions":{"@langchain/core":"1.1.36","@langchain/openai":"1.3.1"}}'
    },
    status: { code: 1 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@opentelemetry/instrumentation-http',
        version: '0.213.0',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'c219dab72f44ba5c',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'GET',
    id: '332ae7e742b44812',
    kind: 2,
    timestamp: 1774429436432000,
    duration: 1430923.3,
    attributes: {
        'http.url': 'https://gnews.io/api/v4/search?q=latest+news&lang=en&max=3&apikey=66efa9e89a7de1f61a00a7f5cb7bb0ec',
        'http.method': 'GET',
        'http.target': '/api/v4/search?q=latest+news&lang=en&max=3&apikey=66efa9e89a7de1f61a00a7f5cb7bb0ec',
        'net.peer.name': 'gnews.io',
        'http.host': 'gnews.io:443',
        'net.peer.ip': '157.230.179.93',
        'net.peer.port': 443,
        'http.status_code': 200,
        'http.status_text': 'OK',
        'http.flavor': '1.1',
        'net.transport': 'ip_tcp'
    },
    status: { code: 0 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@opentelemetry/instrumentation-undici',
        version: '0.23.0',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'a6607a89d566d7c5',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'POST',
    id: '5f6da23a4458b118',
    kind: 2,
    timestamp: 1774429437870000,
    duration: 4235444,
    attributes: {
        'http.request.method': 'POST',
        'http.request.method_original': 'POST',
        'url.full': 'https://api.openai.com/v1/chat/completions',
        'url.path': '/v1/chat/completions',
        'url.query': '',
        'url.scheme': 'https',
        'server.address': 'api.openai.com',
        'server.port': 443,
        'user_agent.original': 'langchainjs-openai/1.0.0 ((node/v20.18.0; win32; x64))',
        'network.peer.address': '172.66.0.243',
        'network.peer.port': 443,
        'http.response.status_code': 200
    },
    status: { code: 0 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@arizeai/openinference-instrumentation-openai',
        version: '4.0.5',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'c219dab72f44ba5c',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'OpenAI Chat Completions',
    id: 'a6607a89d566d7c5',
    kind: 0,
    timestamp: 1774429437868000,
    duration: 4239539.5,
    attributes: {
        'openinference.span.kind': 'LLM',
        'llm.model_name': 'gpt-4o-mini-2024-07-18',
        'input.value': `{"model":"gpt-4o-mini","stream":false,"messages":[{"role":"user","content":"Summarize and give market impact:\\nMaxx Crosby Trade Update is Good News for Seahawks\\nMaxx Crosby trade news: The latest trade update is good news for the Seattle Seahawks if they eventually want to get him.\\nSource: Heavy.\\n\\nLatest news, predictions and more\\nHere's everything you need to know for Duke women's basketball ahead of Kara Lawson and the Blue Devils' Sweet 16 game vs. Kim Mulkey and LSU.\\nSource: Fayetteville Observer\\n\\nIs LaMelo Ball playing tonight vs the Sacramento Kings: Latest update on the Charlotte Hornets star's injury report (March 24, 2026)\\nNBA News: The Charlotte Hornets will have clarity going into Tuesday night’s home game, as LaMelo Ball is expected to be available. The latest injury report doe.\\nSource: Times of India"}]}`,
        'input.mime_type': 'application/json',
        'llm.invocation_parameters': '{"model":"gpt-4o-mini","stream":false}',
        'llm.system': 'openai',
        'llm.provider': 'openai',
        'llm.input_messages.0.message.role': 'user',
        'llm.input_messages.0.message.content': 'Summarize and give market impact:\n' +
            'Maxx Crosby Trade Update is Good News for Seahawks\n' +
            'Maxx Crosby trade news: The latest trade update is good news for the Seattle Seahawks if they eventually want to get him.\n' +
            'Source: Heavy.\n' +
            '\n' +
            'Latest news, predictions and more\n' +
            "Here's everything you need to know for Duke women's basketball ahead of Kara Lawson and the Blue Devils' Sweet 16 game vs. Kim Mulkey and LSU.\n" +
            'Source: Fayetteville Observer\n' +
            '\n' +
            "Is LaMelo Ball playing tonight vs the Sacramento Kings: Latest update on the Charlotte Hornets star's injury report (March 24, 2026)\n" +
            'NBA News: The Charlotte Hornets will have clarity going into Tuesday night’s home game, as LaMelo Ball is expected to be available. The latest injury report doe.\n' +
            'Source: Times of India',
        'output.value': `{"id":"chatcmpl-DNERd9WG4kHFDt0zaXVheDUuGp0Br","object":"chat.completion","created":1774429441,"model":"gpt-4o-mini-2024-07-18","choices":[{"index":0,"message":{"role":"assistant","content":"### Summary:\\n1. **Maxx Crosby Trade Update**: There are positive developments regarding the potential trade of Maxx Crosby to the Seattle Seahawks, suggesting that the Seahawks may have a favorable opportunity to acquire him.\\n\\n2. **Duke Women’s Basketball**: The article provides insights on the Duke women's basketball team, led by Kara Lawson, as they prepare for their Sweet 16 matchup against Kim Mulkey and LSU.\\n\\n3. **LaMelo Ball Injury Update**: The Charlotte Hornets expect LaMelo Ball to be available for their upcoming game against the Sacramento Kings, following recent updates on his injury status.\\n\\n### Market Impact:\\n1. **Maxx Crosby Trade**: If the Seahawks successfully acquire Crosby, it could significantly bolster their defense, potentially improving their performance in the upcoming NFL season. This could have positive implications for fan engagement, season ticket sales, and overall team valuation.\\n\\n2. **Duke Women’s Basketball**: A successful run in the tournament could enhance the visibility and brand of Duke's women's basketball program, potentially leading to increased merchandise sales and viewership for future games.\\n\\n3. **LaMelo Ball Availability**: Ball's return could positively affect the Hornets' performance and attendance, leading to a potential increase in ticket sales and merchandise, as well as impacting the betting lines for their games. It may also boost the visibility and engagement of the team's fanbase.","refusal":null,"annotations":[]},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":171,"completion_tokens":282,"total_tokens":453,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}},"service_tier":"default","system_fingerprint":"fp_e738e3044b"}`,
        'output.mime_type': 'application/json',
        'llm.output_messages.0.message.role': 'assistant',
        'llm.output_messages.0.message.content': '### Summary:\n' +
            '1. **Maxx Crosby Trade Update**: There are positive developments regarding the potential trade of Maxx Crosby to the Seattle Seahawks, suggesting that the Seahawks may have a favorable opportunity to acquire him.\n' +
            '\n' +
            "2. **Duke Women’s Basketball**: The article provides insights on the Duke women's basketball team, led by Kara Lawson, as they prepare for their Sweet 16 matchup against Kim Mulkey and LSU.\n" +
            '\n' +
            '3. **LaMelo Ball Injury Update**: The Charlotte Hornets expect LaMelo Ball to be available for their upcoming game against the Sacramento Kings, following recent updates on his injury status.\n' +
            '\n' +
            '### Market Impact:\n' +
            '1. **Maxx Crosby Trade**: If the Seahawks successfully acquire Crosby, it could significantly bolster their defense, potentially improving their performance in the upcoming NFL season. This could have positive implications for fan engagement, season ticket sales, and overall team valuation.\n' +
            '\n' +
            "2. **Duke Women’s Basketball**: A successful run in the tournament could enhance the visibility and brand of Duke's women's basketball program, potentially leading to increased merchandise sales and viewership for future games.\n" +
            '\n' +
            "3. **LaMelo Ball Availability**: Ball's return could positively affect the Hornets' performance and attendance, leading to a potential increase in ticket sales and merchandise, as well as impacting the betting lines for their games. It may also boost the visibility and engagement of the team's fanbase.",
        'llm.token_count.completion': 282,
        'llm.token_count.prompt': 171,
        'llm.token_count.total': 453,
        'llm.token_count.prompt_details.cache_read': 0,
        'llm.token_count.prompt_details.audio': 0,
        'llm.token_count.completion_details.audio': 0,
        'llm.token_count.completion_details.reasoning': 0
    },
    status: { code: 1 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@arizeai/openinference-instrumentation-langchain',
        version: '4.0.6',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: {
        traceId: 'fb53382cade40cf3c5c47f26f598f13b',
        spanId: 'c219dab72f44ba5c',
        traceFlags: 1,
        traceState: undefined
    },
    traceState: undefined,
    name: 'ChatOpenAI',
    id: '7314360591edeb40',
    kind: 0,
    timestamp: 1774429437867000,
    duration: 4243355.8,
    attributes: {
        'openinference.span.kind': 'LLM',
        'input.value': `{"messages":[[{"lc":1,"type":"constructor","id":["langchain_core","messages","HumanMessage"],"kwargs":{"content":"Summarize and give market impact:\\nMaxx Crosby Trade Update is Good News for Seahawks\\nMaxx Crosby trade news: The latest trade update is good news for the Seattle Seahawks if they eventually want to get him.\\nSource: Heavy.\\n\\nLatest news, predictions and more\\nHere's everything you need to know for Duke women's basketball ahead of Kara Lawson and the Blue Devils' Sweet 16 game vs. Kim Mulkey and LSU.\\nSource: Fayetteville Observer\\n\\nIs LaMelo Ball playing tonight vs the Sacramento Kings: Latest update on the Charlotte Hornets star's injury report (March 24, 2026)\\nNBA News: The Charlotte Hornets will have clarity going into Tuesday night’s home game, as LaMelo Ball is expected to be available. The latest injury report doe.\\nSource: Times of India","additional_kwargs":{},"response_metadata":{}}}]]}`,
        'input.mime_type': 'application/json',
        'output.value': `{"generations":[[{"text":"### Summary:\\n1. **Maxx Crosby Trade Update**: There are positive developments regarding the potential trade of Maxx Crosby to the Seattle Seahawks, suggesting that the Seahawks may have a favorable opportunity to acquire him.\\n\\n2. **Duke Women’s Basketball**: The article provides insights on the Duke women's basketball team, led by Kara Lawson, as they prepare for their Sweet 16 matchup against Kim Mulkey and LSU.\\n\\n3. **LaMelo Ball Injury Update**: The Charlotte Hornets expect LaMelo Ball to be available for their upcoming game against the Sacramento Kings, following recent updates on his injury status.\\n\\n### Market Impact:\\n1. **Maxx Crosby Trade**: If the Seahawks successfully acquire Crosby, it could significantly bolster their defense, potentially improving their performance in the upcoming NFL season. This could have positive implications for fan engagement, season ticket sales, and overall team valuation.\\n\\n2. **Duke Women’s Basketball**: A successful run in the tournament could enhance the visibility and brand of Duke's women's basketball program, potentially leading to increased merchandise sales and viewership for future games.\\n\\n3. **LaMelo Ball Availability**: Ball's return could positively affect the Hornets' performance and attendance, leading to a potential increase in ticket sales and merchandise, as well as impacting the betting lines for their games. It may also boost the visibility and engagement of the team's fanbase.","message":{"lc":1,"type":"constructor","id":["langchain_core","messages","AIMessage"],"kwargs":{"id":"chatcmpl-DNERd9WG4kHFDt0zaXVheDUuGp0Br","content":"### Summary:\\n1. **Maxx Crosby Trade Update**: There are positive developments regarding the potential trade of Maxx Crosby to the Seattle Seahawks, suggesting that the Seahawks may have a favorable opportunity to acquire him.\\n\\n2. **Duke Women’s Basketball**: The article provides insights on the Duke women's basketball team, led by Kara Lawson, as they prepare for their Sweet 16 matchup against Kim Mulkey and LSU.\\n\\n3. **LaMelo Ball Injury Update**: The Charlotte Hornets expect LaMelo Ball to be available for their upcoming game against the Sacramento Kings, following recent updates on his injury status.\\n\\n### Market Impact:\\n1. **Maxx Crosby Trade**: If the Seahawks successfully acquire Crosby, it could significantly bolster their defense, potentially improving their performance in the upcoming NFL season. This could have positive implications for fan engagement, season ticket sales, and overall team valuation.\\n\\n2. **Duke Women’s Basketball**: A successful run in the tournament could enhance the visibility and brand of Duke's women's basketball program, potentially leading to increased merchandise sales and viewership for future games.\\n\\n3. **LaMelo Ball Availability**: Ball's return could positively affect the Hornets' performance and attendance, leading to a potential increase in ticket sales and merchandise, as well as impacting the betting lines for their games. It may also boost the visibility and engagement of the team's fanbase.","additional_kwargs":{},"response_metadata":{"tokenUsage":{"promptTokens":171,"completionTokens":282,"totalTokens":453},"finish_reason":"stop","model_provider":"openai","model_name":"gpt-4o-mini-2024-07-18","usage":{"prompt_tokens":171,"completion_tokens":282,"total_tokens":453,"prompt_tokens_details":{"cached_tokens":0,"audio_tokens":0},"completion_tokens_details":{"reasoning_tokens":0,"audio_tokens":0,"accepted_prediction_tokens":0,"rejected_prediction_tokens":0}},"system_fingerprint":"fp_e738e3044b"},"type":"ai","tool_calls":[],"invalid_tool_calls":[],"usage_metadata":{"output_tokens":282,"input_tokens":171,"total_tokens":453,"input_token_details":{"audio":0,"cache_read":0},"output_token_details":{"audio":0,"reasoning":0}}}},"generationInfo":{"finish_reason":"stop"}}]],"llmOutput":{"tokenUsage":{"promptTokens":171,"completionTokens":282,"totalTokens":453}}}`,
        'output.mime_type': 'application/json',
        'llm.input_messages.0.message.role': 'user',
        'llm.input_messages.0.message.content': 'Summarize and give market impact:\n' +
            'Maxx Crosby Trade Update is Good News for Seahawks\n' +
            'Maxx Crosby trade news: The latest trade update is good news for the Seattle Seahawks if they eventually want to get him.\n' +
            'Source: Heavy.\n' +
            '\n' +
            'Latest news, predictions and more\n' +
            "Here's everything you need to know for Duke women's basketball ahead of Kara Lawson and the Blue Devils' Sweet 16 game vs. Kim Mulkey and LSU.\n" +
            'Source: Fayetteville Observer\n' +
            '\n' +
            "Is LaMelo Ball playing tonight vs the Sacramento Kings: Latest update on the Charlotte Hornets star's injury report (March 24, 2026)\n" +
            'NBA News: The Charlotte Hornets will have clarity going into Tuesday night’s home game, as LaMelo Ball is expected to be available. The latest injury report doe.\n' +
            'Source: Times of India',
        'llm.output_messages.0.message.role': 'assistant',
        'llm.output_messages.0.message.content': '### Summary:\n' +
            '1. **Maxx Crosby Trade Update**: There are positive developments regarding the potential trade of Maxx Crosby to the Seattle Seahawks, suggesting that the Seahawks may have a favorable opportunity to acquire him.\n' +
            '\n' +
            "2. **Duke Women’s Basketball**: The article provides insights on the Duke women's basketball team, led by Kara Lawson, as they prepare for their Sweet 16 matchup against Kim Mulkey and LSU.\n" +
            '\n' +
            '3. **LaMelo Ball Injury Update**: The Charlotte Hornets expect LaMelo Ball to be available for their upcoming game against the Sacramento Kings, following recent updates on his injury status.\n' +
            '\n' +
            '### Market Impact:\n' +
            '1. **Maxx Crosby Trade**: If the Seahawks successfully acquire Crosby, it could significantly bolster their defense, potentially improving their performance in the upcoming NFL season. This could have positive implications for fan engagement, season ticket sales, and overall team valuation.\n' +
            '\n' +
            "2. **Duke Women’s Basketball**: A successful run in the tournament could enhance the visibility and brand of Duke's women's basketball program, potentially leading to increased merchandise sales and viewership for future games.\n" +
            '\n' +
            "3. **LaMelo Ball Availability**: Ball's return could positively affect the Hornets' performance and attendance, leading to a potential increase in ticket sales and merchandise, as well as impacting the betting lines for their games. It may also boost the visibility and engagement of the team's fanbase.",
        'llm.invocation_parameters': '{"model":"gpt-4o-mini","stream":false}',
        'llm.model_name': 'gpt-4o-mini',
        'llm.token_count.completion': 282,
        'llm.token_count.prompt': 171,
        'llm.token_count.total': 453,
        metadata: '{"ls_provider":"openai","ls_model_name":"gpt-4o-mini","ls_model_type":"chat","ls_integration":"langchain_chat_model","model":"gpt-4o-mini","stream":false,"versions":{"@langchain/core":"1.1.36","@langchain/openai":"1.3.1"}}'
    },
    status: { code: 1 },
    events: [],
    links: []
},
{
    resource: {
        attributes: {
            'service.name': 'unknown_service:node',
            'telemetry.sdk.language': 'nodejs',
            'telemetry.sdk.name': 'opentelemetry',
            'telemetry.sdk.version': '2.6.0'
        }
    },
    instrumentationScope: {
        name: '@opentelemetry/instrumentation-http',
        version: '0.213.0',
        schemaUrl: undefined
    },
    traceId: 'fb53382cade40cf3c5c47f26f598f13b',
    parentSpanContext: undefined,
    traceState: undefined,
    name: 'POST',
    id: 'c219dab72f44ba5c',
    kind: 1,
    timestamp: 1774429433622000,
    duration: 8498470.9,
    attributes: {
        'http.url': 'http://localhost:3000/chat',
        'http.host': 'localhost:3000',
        'net.host.name': 'localhost',
        'http.method': 'POST',
        'http.scheme': 'http',
        'http.target': '/chat',
        'http.user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
        'http.request_content_length_uncompressed': 25,
        'http.flavor': '1.1',
        'net.transport': 'ip_tcp',
        'net.host.ip': '::1',
        'net.host.port': 3000,
        'net.peer.ip': '::1',
        'net.peer.port': 61751,
        'http.status_code': 200,
        'http.status_text': 'OK'
    },
    status: { code: 0 },
    events: [],
    links: []
}]
