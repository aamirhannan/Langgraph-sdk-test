require("dotenv").config();
const { ChatOpenAI } = require("@langchain/openai");

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

module.exports = async (state) => {

  const res = await llm.invoke(
    `Classify intent: news, finance, math, or general.\nInput: ${state.input}`
  );

  state.intent = res.content.toLowerCase();
  return state;
};