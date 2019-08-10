import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../types";
import { loadUser } from "./user";

export default function*() {
  yield takeLatest(GET_USER, loadUser);
}
