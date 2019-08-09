import { GET_USER } from "../types";

export function getUser(id) {
  return {
    type: GET_USER,
    payload: id
  };
}
