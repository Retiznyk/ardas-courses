import React from "react";
import useUser from "../hooks/useUser";

export default ({ userId }) => {
  const { user, loading } = useUser(userId);
  return loading ? "Loading" : <div>{user.name}</div>;
};
