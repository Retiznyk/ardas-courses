import React from "react";

export default (name, request) => Component =>
  class SignInWrapper extends React.Component {
    state = {
      loading: false
    };

    doRequest = (...args) => {
      this.setState({ loading: true });
      return request(...args).finally(() => this.setState({ loading: false }));
    };

    render() {
      const api = {
        loading: this.state.loading,
        signIn: this.doRequest
      };

      return <Component {...this.props} {...{ [name]: api }} />;
    }
  };
