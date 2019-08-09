import { createSelector } from "reselect";

export const getUser = state => state.user.data;

export const getUserSaved = createSelector(
  getUser,
  user => user
);
