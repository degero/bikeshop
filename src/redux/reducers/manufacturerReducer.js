import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function manufactuererReducer(state = initialState.manufacturers, action) {
  switch (action.type) {
    case types.CREATE_MANUFACTURER_SUCCESS: // Add to the state
      return [...state, { ...action.manufacturer }];
    case types.UPDATE_MANUFACTURER_SUCCESS:
      return state.map((manufacturer) =>
        manufacturer.id === action.manufacturer.id ? action.manufacturer : manufacturer
      ); // map the updated bike to the state
    case types.DELETE_MANUFACTURER_OPTIMISTIC:
      return state.filter((manufacturer) => manufacturer.id !== action.manufacturer.id); // filter out deleted bike
    case types.LOAD_MANUFACTURERS_SUCCESS:
      return action.manufacturers;
    default:
      return state;
  }
}
