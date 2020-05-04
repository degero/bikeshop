import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/bikes/";

export function getBikes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveBike(bike) {
  return fetch(baseUrl + (bike.id || ""), {
    method: bike.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bike),
  })
    .then(handleResponse)
    .catch(handleError);
}
