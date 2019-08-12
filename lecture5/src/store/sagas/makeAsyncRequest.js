import { put, call } from "redux-saga/effects";
import { successAction, failureAction } from "../types";

export default function*(action, actionType, options = {}) {
  try {
    const result = yield action();
    yield put({
      type: successAction(actionType),
      payload: result,
      ...options
    });
  } catch (error) {
    yield put({
      type: failureAction(actionType),
      error,
      ...options
    });
  }
}
