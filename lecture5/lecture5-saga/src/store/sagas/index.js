import createSagaMiddleware from "redux-saga";

import user from "./user.triggers";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

export const run = () => sagaMiddleware.run(user);
