module.exports = async (state) => {
  state.response = state.data || "No response";
  return state;
};