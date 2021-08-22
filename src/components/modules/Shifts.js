import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { View } from "../blocks";
import Calendar from "react-calendar";
import { getData } from "../../actions/getData";
import { connect } from "react-redux";

const Shifts = ({ shifts, handleSetData }) => {
  const [value, onChange] = useState(new Date());

  const handleClickDay = (e) => {
    console.log(e, "will show the 2 workers today");
  };

  const setTileContent = (date, view) => {
    const formatedDate = date.toLocaleDateString();
    return view === "month" && shifts[formatedDate] ? (
      <div>
        <Shift>{shifts[formatedDate][0].name}</Shift>
        <Shift>{shifts[formatedDate][1].name}</Shift>
      </div>
    ) : null;
  };

  return (
    <ShiftsContainer>
      <StyledCalendar
        defaultView="month"
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        minDate={new Date()}
        onChange={onChange}
        onClickDay={(e) => handleClickDay(e)}
        value={value}
        tileContent={({ date, view }) => setTileContent(date, view)}
      />
    </ShiftsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    shifts: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetData: (i) => dispatch(getData(i)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shifts);

const Shift = styled.p`
  padding: 5px 10px;
  border: 2px solid #4078b3;
  color: #4078b3;

  margin: 5px 0;

  border-radius: 5px;

  :hover {
    color: white;
    background-color: #4078b3;
  }
`;

const StyledCalendar = styled(Calendar)`
  button {
    background-color: white !important;
    border-radius: 5px;
  }
`;

const ShiftsContainer = styled(View)`
  padding: 20px;
  background-color: #e7e7e7;
  margin: 10px 0;

  border-radius: 10px;

  display: block;
`;
