require("dotenv").config();
const { ChatAnthropic } = require("@langchain/anthropic");

const llm = new ChatAnthropic({
  modelName: "claude-3-haiku-20240307",
  temperature: 0,
  anthropicApiKey: process.env.CLAUDE_API_KEY
});

module.exports = async (state) => {

  const res = await llm.invoke(
    `Classify intent: news, finance, math, or general.\nInput: ${state.input}`
  );

  state.intent = res.content.toLowerCase();
  return state;
};