import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  margin: 10px;
`;

const FieldName = styled.span`
  flex: 1;
  font-weight: bold;
`;

const FieldValue = styled.span`
  flex: 1;
  color: gray;
`;

export default ({ user }) =>
  user.id && (
    <Container>
      <Row>
        <FieldName>Name: </FieldName>
        <FieldValue>{user.name}</FieldValue>
      </Row>
      <Row>
        <FieldName>Email: </FieldName>
        <FieldValue>{user.email}</FieldValue>
      </Row>
      <Row>
        <FieldName>Phone: </FieldName>
        <FieldValue>{user.phone}</FieldValue>
      </Row>
    </Container>
  );
