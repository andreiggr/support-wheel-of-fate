export default function editEngineer(engineer, newName) {
  return (dispatch) =>
    dispatch({
      type: "EDIT_ENGINEER",
      engineer,
      newName,
    });
}
