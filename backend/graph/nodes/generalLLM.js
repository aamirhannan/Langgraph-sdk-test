require("dotenv").config();

const { ChatOpenAI } = require("@langchain/openai");

const llm = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY
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