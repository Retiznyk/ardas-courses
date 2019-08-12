import { takeLatest, call } from "redux-saga/effects";
import { GET_USERS } from "../types";
import { getUsers } from "../../services/api";
import makeAsyncRequest from "./makeAsyncRequest";

function* fetchUsers() {
  const action = () => call(getUsers);
  yield makeAsyncRequest(action, GET_USERS);
}

function* watchGetUsers() {
  yield takeLatest(GET_USERS, fetchUsers);
}

export default [watchGetUsers];
