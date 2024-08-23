import { API_URL } from "./constants";

// get all tasks
export const getAllProducts = async () => {
  return fetch(API_URL + "/productos").then((response) => response.json());
};

export const getAllFarmers = async () => {
  return fetch(API_URL).then((response) => response.json());
};
