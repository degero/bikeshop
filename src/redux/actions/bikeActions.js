import * as types from "./actionTypes";
import * as bikeApi from "../../api/bikeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_BIKES_SUCCESS, courses };
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
      .then((courses) => {
        dispatch(loadBikeSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
