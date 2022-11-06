import { combineReducers } from "redux";
import channelReducer from "./channelReducer";
import useReducer from "./userReducer";

const rootReducer = combineReducers({
  user: useReducer,
  channel: channelReducer,
});

export default rootReducer;
