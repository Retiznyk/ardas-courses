import React, { Component } from "react";
import styled from "styled-components";

import { getPostsByUser } from "../services/api";

import Post from "./Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Users extends Component {
  state = {
    posts: []
  };

  get userId() {
    return this.props.match.params.userId;
  }

  componentDidMount() {
    getPostsByUser(this.userId).then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <h1>User {this.userId}</h1>
        <h2>This user has some posts:</h2>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    );
  }
}
