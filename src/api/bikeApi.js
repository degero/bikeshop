import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/bikes/";

export function getBikes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
