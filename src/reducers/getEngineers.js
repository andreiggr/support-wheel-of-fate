const removeItem = (state, engineer) => {
  const index = state.indexOf(engineer);

  const newState = [...state.slice(0, index), ...state.slice(index + 1)];

  return newState;
};

const editItem = (state, engineer, newName) => {
  const index = state.indexOf(engineer);

  const newEngineer = { name: newName };

  const newState = [
    ...state.slice(0, index),
    newEngineer,
    ...state.slice(index + 1),
  ];

  return newState;
};

const getEngineers = (state = "", action) => {
  switch (action.type) {
    case "GET_ENGINEERS":
      return action.engineers;
    case "REGISTER_ENGINEER":
      return [...state, action.engineer];
    case "REMOVE_ENGINEER":
      return removeItem(state, action.engineer);
    case "EDIT_ENGINEER":
      return editItem(state, action.engineer, action.newName);
    default:
      return state;
  }
};

export default getEngineers;
