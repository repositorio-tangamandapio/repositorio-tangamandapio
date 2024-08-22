import { API_URL } from "./constants";

// create a new task
export const pos = async ({ title, description, isComplete }) => {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ title, description, isComplete }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

// get all tasks
export const getAllTasks = async () => {
  return fetch(API_URL).then((response) => response.json());
};
