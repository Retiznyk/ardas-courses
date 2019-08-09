import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { getUser } from "../../store/actions/user";

const WithContentContainer = Component =>
  class ContentContainer extends React.Component {
    onDispatch = () => {
      this.props.getUser(1);
    };

    render() {
      return <Component {...this.props} onDispatch={this.onDispatch} />;
    }
  };

export default compose(
  connect(
    null,
    { getUser }
  ),
  WithContentContainer
);
