import * as types from "./actionTypes";
import * as bikeApi from "../../api/bikeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadBikeSuccess(bikes) {
  return { type: types.LOAD_BIKES_SUCCESS, bikes };
}

export function saveBike(bike) {
  return function (dispatch, getState) {
    // tODO
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
