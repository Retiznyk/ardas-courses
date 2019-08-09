import { createStore } from "redux";

import reducers from "./reducers";
import middlewares from "./middlewares";

const initialState = {};

const store = createStore(reducers, initialState, middlewares);

export default store;
