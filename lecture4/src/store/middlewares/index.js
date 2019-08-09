import { compose, applyMiddleware } from "redux";
import user from "./user";

const g = global || window;
const composeEnhancers =
  typeof g === "object" && g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [user];

export default composeEnhancers(applyMiddleware(...middlewares));
