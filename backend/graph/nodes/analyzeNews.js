require("dotenv").config();
const { ChatOpenAI } = require("@langchain/openai");

const llm = new ChatOpenAI({ model: "gpt-4o-mini" });

module.exports = async (state) => {

  const res = await llm.invoke(
    `Summarize and give market impact:\n${state.data}`
  );

  state.data = res.content;
  return state;
};