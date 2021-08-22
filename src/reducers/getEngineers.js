const getEngineers = (state = "", action) => {
  switch (action.type) {
    case "GET_ENGINEERS":
      return action.engineers;
    default:
      return state;
  }
};

export default getEngineers;
