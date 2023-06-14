import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as manufacturerApi from "../../api/manufacturerApi";

export function loadManufacturerSuccess(manufacturers) {
  return { type: types.LOAD_MANUFACTURERS_SUCCESS, manufacturers };
}

export function createdManufacturerSuccess(manufacturer) {
  // perhaps better to reload set from server to keep in sync if multiple editors?
  return { type: types.CREATE_MANUFACTURER_SUCCESS, manufacturer };
}

export function updatedManufacturerSuccess(manufacturer) {
  // perhaps better to reload set from server to keep in sync if multiple editors?
  return { type: types.UPDATE_MANUFACTURER_SUCCESS, manufacturer };
}
export function deleteManufacturer(manufacturer) {
  return function (dispatch, getState) {
    // this is deleted optimistic so no api call tracking is done
    return manufacturerApi
      .deleteManufacturer(manufacturer)
      .then(dispatch({ type: types.DELETE_MANUFACTURER_OPTIMISTIC, manufacturer }))
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}
export function saveManufacturer(manufacturer) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return manufacturerApi
      .saveManufacturer(manufacturer)
      .then((savedManufacturer) => {
        manufacturer.id
          ? dispatch(updatedManufacturerSuccess(savedManufacturer))
          : dispatch(createdManufacturerSuccess(savedManufacturer));
      })
      .catch((err) => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}

export function loadManufacturers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return manufacturerApi
      .getManufacturers()
      .then((manufacturers) => {
        dispatch(loadManufacturerSuccess(manufacturers));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
