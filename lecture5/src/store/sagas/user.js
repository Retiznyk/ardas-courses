import { takeLatest, put, delay, select } from "redux-saga/effects";

import { successAction, GET_USERS } from "../types";
import { selectUser } from "../actions/user";
import { getUsers } from "../selectors/users";
import { getSelectedUser } from "../selectors/user";

function* selectInitialUser(action) {
  const users = action.payload;
  const [nextUser] = users;

  yield put(selectUser(nextUser));
}

function* selectNextUser() {
  const users = yield select(getUsers);
  const selectedUser = yield select(getSelectedUser);

  const idx = users.findIndex(u => !!selectedUser && u.id === selectedUser.id);
  const userFound = idx >= 0;

  let nextIndex = 0;

  if (userFound) {
    nextIndex = idx + 1 >= users.length ? 0 : idx + 1;
  } else {
    nextIndex = 0;
  }

  const nextUser = users[nextIndex] || null;
  yield put(selectUser(nextUser));
}

function* watchGetUsers() {
  yield takeLatest(successAction(GET_USERS), selectInitialUser);
}

function* startAutoSelectUser() {
  while (true) {
    yield delay(3000);
    yield* selectNextUser();
  }
}

export default [watchGetUsers, startAutoSelectUser];
