import React, { lazy, Suspense } from "react";

import { Provider } from "./UsersContext";

const LazyUsers = lazy(() => import("./UsersPanel"));

export default class App extends React.Component {
  state = {
    show: true
  };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const { show } = this.state;

    return (
      <Provider>
        <>
          <button
            style={{ alignSelf: "center", height: "100px", width: "150px" }}
            onClick={this.toggle}
          >
            Toggle
          </button>
          {show && (
            <Suspense fallback={"Loading..."}>
              <LazyUsers />
            </Suspense>
          )}
        </>
      </Provider>
    );
  }
}
