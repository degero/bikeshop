export const CREATE_BIKE = "CREATE_BIKE";
export const LOAD_BIKES_SUCCESS = "LOAD_BIKES_SUCCESS";
export const CREATE_BIKE_SUCCESS = "CREATE_BIKE_SUCCESS";
export const UPDATE_BIKE_SUCCESS = "UPDATE_BIKE_SUCCESS";

// We dont wait for API response which makes the UI very performant but
// the trade off is concurrency or error handling if the delete fails
export const DELETE_BIKE_OPTIMISTIC = "DELETE_BIKE_OPTIMISTIC";

export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
