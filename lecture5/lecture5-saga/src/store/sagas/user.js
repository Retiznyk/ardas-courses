import { call } from "redux-saga/effects";
import makeAsyncRequest from "./makeAsyncRequest";
import { getUser } from "../../services/api";
import { GET_USER } from "../types";

export function* loadUser(action) {
  const userId = action.payload;
  const req = () => call(getUser, userId);
  yield makeAsyncRequest(req, GET_USER);
}
