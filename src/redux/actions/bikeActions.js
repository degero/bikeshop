import * as types from "./actionTypes";
import * as bikeApi from "../../api/bikeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBikeSuccess(bikes) {
  return { type: types.LOAD_BIKES_SUCCESS, bikes };
}

export function createdBikeSuccess(bike) {
  // perhaps better to reload set from server to keep in sync if multiple editors?
  return { type: types.CREATE_BIKE_SUCCESS, bike };
}

export function updatedBikeSuccess(bike) {
  // perhaps better to reload set from server to keep in sync if multiple editors?
  return { type: types.UPDATE_BIKE_SUCCESS, bike };
}

export function saveBike(bike) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    // TODO handle update
    return bikeApi
      .saveBike(bike)
      .then((savedBike) => {
        savedBike.id
          ? dispatch(updatedBikeSuccess(savedBike))
          : dispatch(createdBikeSuccess(savedBike));
      })
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}

export function loadBikes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return bikeApi
      .getBikes()
      .then((bikes) => {
        dispatch(loadBikeSuccess(bikes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
