import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/auth";

export default class AuthRouter extends React.Component {
  state = {
    loading: true,
    auth: auth.authorized
  };

  componentDidMount() {
    if (!auth.authorized) {
      this._watcher = auth.onAuthStateChange(this.handleAuthStateChange);
    } else {
      this.setState({ loading: false });
    }
  }

  releaseWatchers = () => this._watcher && this._watcher();

  handleAuthStateChange = value => {
    if (value) {
      this.setState({ auth: true, loading: false }, this.releaseWatchers);
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    const { auth, loading } = this.state;

    return loading ? (
      "Loading"
    ) : auth ? (
      <Route {...this.props} />
    ) : (
      <Redirect to="/login" />
    );
  }
}
