import { API_URL } from "./constants";

// get all tasks
export const getAllProducts = async () => {
  return fetch(API_URL + "/productos").then((response) => response.json());
};

export const getAllSellers = async () => {
  return fetch(API_URL + "/users").then((response) => response.json());
};
export const getProduct = async () => {
  const prod = window.location.search;
  return fetch(API_URL + `/productos/${prod.replace("?", "")}`, {
    method: "POST",
  }).then((response) => response.json());
};

export const getSellers = async () => {
  const prod = window.location.search;
  return fetch(API_URL + `/vendedores/${prod.replace("?", "")}`, {
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};
