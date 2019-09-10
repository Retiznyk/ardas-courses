import { GET_USERS, successAction } from "./types";

const initialState = {
  data: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_USERS):
      return { data: action.payload };
    default:
      return state;
  }
}
