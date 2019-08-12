import { SELECT_USER } from "../types";

export const selectUser = user => ({
  type: SELECT_USER,
  payload: user
});
