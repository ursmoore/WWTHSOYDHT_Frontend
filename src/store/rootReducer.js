import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import locations from "./locations/reducer";

export default combineReducers({
  appState,
  user,
  locations,
});
