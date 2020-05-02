import { combineReducers } from "redux";
import bikes from "./bikeReducer";
import apiCallsInProgress from "./apiCallsReducer";

const rootReducer = combineReducers({
  bikes,
  apiCallsInProgress,
});

export default rootReducer;
