import { combineReducers } from "redux";
import bikes from "./bikeReducer";
import apiCallsInProgress from "./apiCallsReducer";

// Note the shorthand mapping below we are using importing bikeReducer as bikes, eg longhand bikes: bikeReducer
const rootReducer = combineReducers({
  bikes,
  apiCallsInProgress,
});

export default rootReducer;
