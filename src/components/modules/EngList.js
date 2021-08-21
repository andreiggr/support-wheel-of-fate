import React from "react";
import styled from "styled-components";
import { Image, View } from "../blocks";
import engineers from "../../utils/mockData";
import HelmetIcon from "../../assets/helmet.svg";

const EngList = () => {
  return (
    <ListContainer>
      {engineers &&
        engineers.map((e, i) => (
          <EngineerCard key={i}>
            <Icon src={HelmetIcon} />
            <Title>{e.name}</Title>
          </EngineerCard>
        ))}
    </ListContainer>
  );
};

export default EngList;

const Icon = styled(Image)`
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ListContainer = styled(View)`
  padding: 20px;
  background-color: #e7e7e7;
  margin: 10px 0;

  border-radius: 10px;

  display: block;
  columns: 2 auto;
`;

const EngineerCard = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 2px solid #4078b3;
  padding: 0px 15px;
  color: #4078b3;

  margin-bottom: 5px;

  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #4078b3;
    color: white;
  }
`;
