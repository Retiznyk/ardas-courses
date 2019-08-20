import React from "react";

import { Route, Switch } from "react-router-dom";

import MainHeader from "./MainHeader";
import UserHeader from "./UserHeader";

export default () => (
  <Switch>
    <Route path="/users/:userId" component={UserHeader} />
    <Route component={MainHeader} />
  </Switch>
);
