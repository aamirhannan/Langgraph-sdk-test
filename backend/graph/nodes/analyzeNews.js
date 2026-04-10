require("dotenv").config();
const { ChatAnthropic } = require("@langchain/anthropic");

const llm = new ChatAnthropic({
  modelName: "claude-3-haiku-20240307",
  anthropicApiKey: process.env.CLAUDE_API_KEY
});

module.exports = async (state) => {

  const res = await llm.invoke(
    `Summarize and give market impact:\n${state.data}`
  );

  state.data = res.content;
  return state;
};