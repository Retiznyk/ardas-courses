import React from "react";

import User from "../User";

export default ({ users, selectUser, selection }) => {
  return users.map(user => (
    <User
      key={user.id}
      user={user}
      selected={selection[user.id]}
      onClick={() => selectUser(user)}
    />
  ));
};
