import { SELECT_USER } from "../types";

class Anonymous {
  id = null;
  name = "";
}

const initialState = new Anonymous();

export default function user(state = initialState, action) {
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    default:
      return state;
  }
}
