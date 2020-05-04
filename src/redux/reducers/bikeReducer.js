import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bikeReducer(state = initialState.bikes, action) {
  debugger;
  switch (action.type) {
    case types.CREATE_BIKE_SUCCESS: // Add to the state
      return [...state, { ...action.bike }];
    case types.UPDATE_BIKE_SUCCESS:
      return state.map((bike) =>
        bike.id === action.bike.id ? action.bike : bike
      ); // map the updated bike to the state
    case types.DELETE_BIKE_OPTIMISTIC:
      return state.filter((bike) => bike.id !== action.bike.id); // filter out deleted bike
    case types.LOAD_BIKES_SUCCESS:
      return action.bikes;
    default:
      return state;
  }
}
