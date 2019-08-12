import { createStore } from "redux";

import reducers from "./reducers";
import middlewares, { run } from "./middlewares";

const initialState = {};

const store = createStore(reducers, initialState, middlewares);

run();

export default store;
