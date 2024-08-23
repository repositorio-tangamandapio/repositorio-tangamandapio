import { API_URL, API_URL_FARMERS } from "./constants";


// get all tasks
export const getAllProducts = async () => {
  return fetch(API_URL).then((response) => response.json());
};

export const getAllFarmers = async () => {
  return fetch(API_URL_FARMERS).then((response) => response.json());
}
