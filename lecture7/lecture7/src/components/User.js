import React, { useContext, useEffect } from "react";

import useApi from "../hooks/useApi";
import UsersContext from "../contexts/UsersContext";

export default () => {
  const { users, removeFirst } = useContext(UsersContext);
  const [user] = users;
  console.log("usrr", user);
  const { data, loading, error } = useApi(
    `https://jsonplaceholder.typicode.com/users/${user && user.id}`
  );

  useEffect(() => {
    console.log("effect");
    setTimeout(() => removeFirst(), 10000);
  }, [users]);

  return <div>{JSON.stringify(data)}</div>;
};
