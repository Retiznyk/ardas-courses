import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getUsers } from "../services/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <Container>
        {users.map(user => (
          <Link key={user.id} to={`/users/${user.id}`}>
            {user.name}
          </Link>
        ))}
      </Container>
    );
  }
}
