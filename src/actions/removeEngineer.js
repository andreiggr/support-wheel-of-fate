export default function removeEngineer(val) {
  return (dispatch) =>
    dispatch({
      type: "REMOVE_ENGINEER",
      engineer: val,
    });
}
