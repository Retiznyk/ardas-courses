import React, { createContext } from "react";

export default request => {
  const Context = createContext();

  const withSignInProvider = Component =>
    class SignInWrapper extends React.Component {
      state = {
        loading: false
      };

      doRequest = (...args) => {
        this.setState({ loading: true });
        return request(...args).finally(() =>
          this.setState({ loading: false })
        );
      };

      render() {
        const api = {
          loading: this.state.loading,
          signIn: this.doRequest
        };

        return (
          <Context.Provider value={api}>
            <Component {...this.props} />
          </Context.Provider>
        );
      }
    };

  const withSignInConsumer = name => Component => props => (
    <Context.Consumer>
      {api => <Component {...props} {...{ [name]: api }} />}
    </Context.Consumer>
  );

  return {
    Context,
    withSignInProvider,
    withSignInConsumer
  };
};
