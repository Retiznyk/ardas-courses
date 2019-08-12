import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";

import users from "./users";
import user from "./user";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [users, user].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);
