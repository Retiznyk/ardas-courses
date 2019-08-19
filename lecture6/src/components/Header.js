import React from "react";
import { Route, Switch } from "react-router-dom";

import MainHeader from "./MainHeader";
import UserHeader from "./UserHeader";

export default () => (
  <>
    <Route path="/" component={MainHeader} />
    <Route path="/users/:userId" component={UserHeader} />
  </>
);
