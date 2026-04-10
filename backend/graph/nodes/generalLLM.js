require("dotenv").config();

const { ChatAnthropic } = require("@langchain/anthropic");

const llm = new ChatAnthropic({
  modelName: "claude-3-haiku-20240307",
  temperature: 0.7,
  anthropicApiKey: process.env.CLAUDE_API_KEY
});

module.exports = async (state) => {
  try {
    const res = await llm.invoke(state.input);
    state.data = res.content;
  } catch (err) {
    state.data = "LLM error occurred";
  }

  return state;
};