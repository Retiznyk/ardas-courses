import { createSelector } from "reselect";

import { getSelectedUser } from "./user";

export const getUsers = state => state.users.data;

export const loading = state => state.users.loading;

export const getUsersSelection = createSelector(
  getUsers,
  getSelectedUser,
  (users, selectedUser) =>
    users.reduce(
      (results, item) =>
        Object.assign(results, {
          [item.id]: !!selectedUser && item.id === selectedUser.id
        }),
      {}
    )
);
