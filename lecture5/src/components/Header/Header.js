import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: linear-gradient(
    90deg,
    ${props => props.colorFrom || "rgba(9,9,121,1)"} 0%,
    rgba(2, 0, 36, 1) 50%,
    ${props => props.colorTo || "rgba(0,212,255,1)"} 100%
  );
  color: white;
`;

const UserName = styled.span`
  margin: 20px;
`;

export default ({ user }) => (
  <Container>
    <UserName>{user.name}</UserName>
  </Container>
);
