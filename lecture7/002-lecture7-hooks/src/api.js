import axios from "axios";

export const getUsers = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data);

export const getUser = userId =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data);
