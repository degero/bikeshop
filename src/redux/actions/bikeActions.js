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
export function deleteBike(bike) {
  return function (dispatch, getState) {
    // this is deleted optimistic so no api call tracking is done
    return bikeApi
      .deleteBike(bike)
      .then(dispatch({ type: types.DELETE_BIKE_OPTIMISTIC, bike }))
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}
export function saveBike(bike) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return bikeApi
      .saveBike(bike)
      .then((savedBike) => {
        bike.id
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
