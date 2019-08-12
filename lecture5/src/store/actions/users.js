import { GET_USERS } from "../types";

export function fetchUsers() {
  return {
    type: GET_USERS
  };
}
