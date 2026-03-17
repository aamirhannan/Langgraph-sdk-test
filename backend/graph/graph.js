const { StateGraph, END } = require("@langchain/langgraph");

// Nodes
const classify = require("./nodes/classifyIntent");
const fetchNews = require("./nodes/fetchNews");
const analyze = require("./nodes/analyzeNews");
const store = require("./nodes/storeNews");
const gold = require("./nodes/getGold");
const calc = require("./nodes/calculator");
const general = require("./nodes/generalLLM");   // ✅ NEW
const final = require("./nodes/finalResponse");

// ✅ Define state schema
const graph = new StateGraph({
  channels: {
    input: "string",
    intent: "string",
    data: "string",
    response: "string"
  }
});

// ✅ Add nodes
graph.addNode("classify", classify);
graph.addNode("fetchNews", fetchNews);
graph.addNode("analyze", analyze);
graph.addNode("store", store);
graph.addNode("gold", gold);
graph.addNode("calc", calc);
graph.addNode("general", general);   // ✅ NEW
graph.addNode("final", final);

// ✅ Entry point
graph.setEntryPoint("classify");

// ✅ Routing logic (FIXED)
graph.addConditionalEdges("classify", (state) => {
  const intent = (state.intent || "").toLowerCase();
  const input = (state.input || "").toLowerCase();

  if (intent.includes("news")) return "fetchNews";
  if (intent.includes("finance") || input.includes("gold")) return "gold";
  if (intent.includes("math") || /[\+\-\*\/]/.test(input)) return "calc";

  // 🔥 IMPORTANT: fallback goes to LLM
  return "general";
});

// ✅ Flow connections
graph.addEdge("fetchNews", "analyze");
graph.addEdge("analyze", "store");
graph.addEdge("store", "final");

graph.addEdge("gold", "final");
graph.addEdge("calc", "final");

// ✅ NEW: general → final
graph.addEdge("general", "final");

// ✅ REQUIRED END
graph.addEdge("final", END);

// Compile
module.exports = graph.compile();