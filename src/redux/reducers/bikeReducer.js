import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bikeReducer(state = initialState.bikes, action) {
  debugger;
  switch (action.type) {
    case types.LOAD_BIKES_SUCCESS:
      return action.bikes;
    default:
      return state;
  }
}
