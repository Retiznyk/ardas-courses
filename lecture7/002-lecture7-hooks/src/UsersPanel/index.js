import React, { useContext } from "react";

import User from "../User";
import UsersContext from "../UsersContext";
import useTicker from "../hooks/useTicker";

export default () => {
  const { users } = useContext(UsersContext);
  const { tick } = useTicker(users);

  return <User userId={tick} />;
};
