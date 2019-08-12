import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { getUsers, loading } from "../store/selectors/users";
import { fetchUsers } from "../store/actions/users";

const WithUsersWrapper = Component =>
  class extends React.Component {
    componentDidMount() {
      this.props.fetchUsers();
    }

    render() {
      return <Component {...this.props} />;
    }
  };

function mapStateToProps(state) {
  return {
    users: getUsers(state),
    usersLoading: loading(state)
  };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchUsers }
  ),
  WithUsersWrapper
);
