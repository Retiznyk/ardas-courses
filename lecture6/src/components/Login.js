import React from "react";
import styled from "styled-components";

import AuthButton from "../components/AuthButton";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default props => (
  <Container>
    <AuthButton onAuth={() => props.history.push("/")} />
  </Container>
);
