import React from "react";
import { Redirect, Route } from "react-router-dom";

import auth from "../services/auth";

export default class AuthRouter extends React.Component {
  state = {
    loading: true,
    auth: auth.authenticated
  };

  _watcher = null;

  componentDidMount() {
    if (auth.authenticated) {
      this.setState({ loading: false });
    } else {
      this._watcher = auth.onStateChange(this.onAuthStateChange);
    }
  }

  componentWillUnmount() {
    this.releaseWatchers();
  }

  releaseWatchers = () => {
    if (this._watcher) {
      this._watcher();
    }
  };

  onAuthStateChange = val => {
    this.setState({ auth: val, loading: false }, this.releaseWatchers);
  };

  render() {
    const { loading, auth } = this.state;

    return loading ? (
      "Loading"
    ) : auth ? (
      <Route {...this.props} />
    ) : (
      <Redirect to="/login" />
    );
  }
}
