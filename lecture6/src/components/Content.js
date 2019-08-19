import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Hello from "./Hello";
import Users from "./Users";
import User from "./User";
import About from "./About";

export default () => (
  <Switch>
    <Route path="/" exact component={Hello} />
    <Route path="/users" exact component={Users} />
    <Route path="/users/:userId" component={User} />
    <Route path="/about" component={About} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);
