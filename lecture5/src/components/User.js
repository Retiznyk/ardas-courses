import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.selected {
    background-color: green;
    color: white;
  }
`;

export default ({ user, selected, onClick }) => (
  <Container className={selected ? "selected" : ""} onClick={onClick}>
    {user.name}
  </Container>
);
