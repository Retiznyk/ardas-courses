import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: blue;
  color: white;
`;

export default ({ user }) => {
  return <Container>{user.name}</Container>;
};
