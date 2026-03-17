const webSearch = require("../../tools/webSearch");

module.exports = async (state) => {
  state.data = await webSearch("Israel Iran war");
  return state;
};