import { successAction, failureAction } from "./types";

export default (action, actionType, options = {}) => dispatch => {
  action()
    .then(data =>
      dispatch({
        type: successAction(actionType),
        ...options,
        data
      })
    )
    .catch(error => ({
      type: failureAction(actionType),
      ...options,
      error
    }));
};
