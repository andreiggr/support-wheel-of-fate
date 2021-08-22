import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Text, View } from "../blocks";

const EngPage = () => {
  const history = useHistory();
  const engineer = history.location.pathname.replace("/engineer/", "");

  return (
    <Container>
      <Text fontSize="26px">
        Engineer: <strong>{engineer}</strong>
      </Text>
      <Text fontSize="16px" color={"gray"} margin="10px 0">
        This is the engineer page that's supposed to have some description about
        the engineer engineering on some engineer matters.
      </Text>
    </Container>
  );
};

export default EngPage;

const Container = styled(View)`
  padding: 20px;
  background-color: #e7e7e7;
  margin: 10px 0;

  border-radius: 10px;
`;
