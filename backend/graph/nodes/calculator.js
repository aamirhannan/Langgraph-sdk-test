module.exports = async (state) => {
  try {
    const result = Function(`return (${state.input})`)();
    state.data = `Result: ${result}`;
  } catch {
    state.data = "Calculation error";
  }
  return state;
};