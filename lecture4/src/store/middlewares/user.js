import { getUser } from "../../services/api";
import { GET_USER, successAction, failureAction } from "../types";

export default store => next => action => {
  if (action.type === GET_USER) {
    getUser(action.payload)
      .then(user =>
        store.dispatch({
          type: successAction(GET_USER),
          payload: user
        })
      )
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_USER),
          error
        })
      );
  } else {
    return next(action);
  }
};
