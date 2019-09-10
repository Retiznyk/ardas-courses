import React, { createContext, useReducer, useEffect } from "react";

import { getUsers } from "./api";

const SET_USERS = "SET_USERS";
const initialState = {
  data: []
};

function reducer(state, action) {
  switch (action.type) {
    case SET_USERS:
      return { data: action.payload };
    default:
      return state;
  }
}

const Context = createContext();

export default Context;

export const Provider = ({ children }) => {
  const [{ data: users }, dispatch] = useReducer(reducer, initialState);

  function loadUsers() {
    getUsers().then(data => {
      dispatch({ type: SET_USERS, payload: data });
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const api = {
    users,
    loadUsers
  };

  return <Context.Provider value={api}>{children}</Context.Provider>;
};
