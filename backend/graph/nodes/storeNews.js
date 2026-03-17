const { setNews } = require("../../tools/db");

module.exports = async (state) => {
  setNews(state.data);
  return state;
};