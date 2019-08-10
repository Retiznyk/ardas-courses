import { compose, applyMiddleware } from "redux";

import sagas, { run as runSagas } from "../sagas";

const g = global || window;
const composeEnhancers =
  typeof g === "object" && g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [sagas];

export default composeEnhancers(applyMiddleware(...middlewares));

export const run = () => runSagas();
