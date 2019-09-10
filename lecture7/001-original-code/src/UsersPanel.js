import React from "react";
import { connect } from "react-redux";
import { loadUsers } from "./usersActions";
import User from "./User";

class UsersPanel extends React.Component {
  state = {
    userId: 0
  };

  componentDidMount() {
    this.props.loadUsers();

    this.interval = setInterval(() => {
      console.log("interval");
      this.setState(prevState => ({ userId: prevState.userId + 1 }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <User userId={this.state.userId} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.data
  };
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(UsersPanel);
