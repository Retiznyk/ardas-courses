import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import UsersPanel from "./UsersPanel";

export default class App extends React.Component {
  state = {
    show: true
  };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const { show } = this.state;

    return (
      <Provider store={store}>
        <>
          <button
            style={{ alignSelf: "center", height: "100px", width: "150px" }}
            onClick={this.toggle}
          >
            Toggle
          </button>
          {show && <UsersPanel />}
        </>
      </Provider>
    );
  }
}
