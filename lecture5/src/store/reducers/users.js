import { successAction, failureAction, GET_USERS } from "../types";

const initialState = {
  loading: false,
  data: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      };
    case successAction(GET_USERS):
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case failureAction(GET_USERS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
