import React from "react";
import { Route, Switch } from "react-router-dom";

import Hello from "./Hello";
import About from "./About";
import Users from "./Users";
import User from "./User";

export default () => (
  <Switch>
    <Route path="/welcome" component={Hello} />
    <Route path="/about" component={About} />
    <Route exact path="/users" component={Users} />
    <Route path="/users/:userId" component={User} />
  </Switch>
);
