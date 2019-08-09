import { successAction, GET_USER } from "../types";

class UnauthorizedUser {
  name = "";
}

const initialState = {
  data: new UnauthorizedUser()
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_USER):
      return {
        data: action.payload
      };
    default:
      return state;
  }
}
