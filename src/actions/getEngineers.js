export default function getEngineers(engineers) {
  return (dispatch) =>
    dispatch({
      type: "GET_ENGINEERS",
      engineers,
    });
}
