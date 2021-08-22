export default function registerEngineer(val) {
  const engineer = { name: val };
  return (dispatch) =>
    dispatch({
      type: "REGISTER_ENGINEER",
      engineer,
    });
}
