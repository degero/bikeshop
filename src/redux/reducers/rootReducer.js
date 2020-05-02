import { combineReducers } from "redux";
import bikeReducer from "./bikeReducer";

const rootReducer = combineReducers({
  bikeReducer,
});

export default rootReducer;
