export default function getEngineers(engineers) {
  console.log("engineers in action", engineers)
  return (dispatch) =>
    dispatch({
      type: "GET_ENGINEERS",
      engineers,
    });
}
