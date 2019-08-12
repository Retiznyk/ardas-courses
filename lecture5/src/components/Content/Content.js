import React from "react";
import styled from "styled-components";

import UserPicker from "../UserPicker";
import UserDetails from "../UserDetails";

const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default ({ usersLoading }) => (
  <Container>
    <Column>{usersLoading ? "Loading" : <UserPicker />}</Column>
    <Column>
      <UserDetails />
    </Column>
  </Container>
);
