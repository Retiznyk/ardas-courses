import React, { createContext, useReducer, useEffect } from "react";
import useApi from "../hooks/useApi";

const UsersContext = createContext();

export default UsersContext;

const initialValue = {
  data: []
};

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return { data: action.payload };
    case "REMOVE":
      console.log("remove", state);
      const [item, ...rest] = state.data;
      return { data: rest };
    default:
      return state;
  }
}

export const Provider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialValue);
  const { data: users } = useApi("https://jsonplaceholder.typicode.com/users");

  console.log("users", users);

  useEffect(() => {
    dispatch({ type: "SET", payload: users });
  }, [users]);

  function removeFirst() {
    dispatch({ type: "REMOVE" });
  }

  const api = {
    users: value.data,
    removeFirst
  };

  return <UsersContext.Provider value={api}>{children}</UsersContext.Provider>;
};
