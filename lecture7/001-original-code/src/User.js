import React from "react";
import { getUser } from "./api";

class UndefinedUser {
  name = "User not found";
}

export default class User extends React.Component {
  state = {
    user: new UndefinedUser()
  };

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchUser();
    }
  }

  fetchUser = () =>
    getUser(this.props.userId)
      .then(user => this.setState({ user }))
      .catch(() => this.setState({ user: new UndefinedUser() }));

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.user.name}
      </div>
    );
  }
}
