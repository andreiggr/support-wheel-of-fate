import { combineReducers } from "redux";
import getData from "./getData";
import getEngineers from "./getEngineers";

export default combineReducers({
  data: getData,
  engineers: getEngineers,
});
