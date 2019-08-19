import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRouter from "./components/AuthRouter";

import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <AuthRouter component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
