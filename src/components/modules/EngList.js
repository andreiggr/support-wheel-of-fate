import React, { useState } from "react";
import styled from "styled-components";
import { Image, View } from "../blocks";
import engineers from "../../utils/mockData";
import HelmetIcon from "../../assets/helmet.svg";
import { connect } from "react-redux";
import registerEngineer from "../../actions/registerEngineer";

import iconDelete from "../../assets/iconDelete.png";
import iconEdit from "../../assets/iconEdit.png";
import removeEngineer from "../../actions/removeEngineer";
import editEngineer from "../../actions/editEngineer";

const Engineer = ({ engineer, handleEdit, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(engineer.name);

  const handleEditAction = () => {
    handleEdit(newName);
    setEdit(false);
  };
  return (
    <EngineerCard>
      <Icon src={HelmetIcon} />
      {edit ? (
        <View>
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <button onClick={() => handleEditAction()}>Ok</button>
        </View>
      ) : (
        <Title>{engineer.name}</Title>
      )}
      <Control>
        <EditButton onClick={() => setEdit(!edit)} src={iconEdit} />
        <DeleteButton onClick={() => handleDelete()} src={iconDelete} />
      </Control>
    </EngineerCard>
  );
};

const EngList = ({
  engineers,
  addEngineer,
  deleteEngineer,
  changeEngineer,
}) => {
  const [engineer, setEngineer] = useState("");
  const handleAddEngineer = () => {
    if (engineer) {
      addEngineer(engineer);
    }
  };

  const handleDeleteEngineer = (e) => {
    deleteEngineer(e);
  };

  const handleEditEngineer = (engineer, newName) => {
    changeEngineer(engineer, newName);
  };
  return (
    <React.Fragment>
      <ListContainer>
        {engineers &&
          engineers.map((e, i) => (
            <Engineer
              key={i}
              engineer={e}
              handleEdit={(value) => handleEditEngineer(e, value)}
              handleDelete={() => handleDeleteEngineer(e)}
            />
          ))}
      </ListContainer>
      <View display="flex">
        <AddInput
          value={engineer}
          onChange={(e) => setEngineer(e.target.value)}
        />
        <AddButton onClick={() => handleAddEngineer()}>Add Engineer</AddButton>
      </View>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    engineers: state.engineers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEngineer: (e) => dispatch(registerEngineer(e)),
    deleteEngineer: (e) => dispatch(removeEngineer(e)),
    changeEngineer: (e, name) => dispatch(editEngineer(e, name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EngList);

const DeleteButton = styled(Image)`
  width: 25px;
  cursor: pointer;
`;

const EditButton = styled(Image)`
  width: 25px;
  cursor: pointer;
  margin-right: 10px;
`;

const Control = styled(View)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const AddInput = styled.input`
  margin-right: 5px;
`;

const AddButton = styled.button`
  padding: 5px 15px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background: #4078b3;
  border: 2px solid #4078b3;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background: white;
    color: #4078b3;
  }
`;

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

  display: flex;
  flex-wrap: wrap;
`;

const EngineerCard = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 2px solid #4078b3;
  padding: 0px 15px;
  color: #4078b3;

  width: 45%;

  margin: 5px;

  border-radius: 5px;

  :hover {
    background-color: #4078b3;
    color: white;
  }
`;
