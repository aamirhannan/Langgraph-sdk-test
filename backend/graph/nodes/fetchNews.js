const webSearch = require("../../tools/webSearch");

module.exports = async (state) => {
  state.data = await webSearch("latest news");
  return state;
};