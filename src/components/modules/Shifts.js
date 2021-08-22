import React, { useState } from "react";
import styled from "styled-components";
import { View } from "../blocks";
import engineers from "../../utils/mockData";
import Calendar from "react-calendar";

const assignEngineers = (engineers, yesterdayItems) => {
  const engineerPool =
    yesterdayItems && yesterdayItems.length > 0
      ? engineers.filter((e) => !yesterdayItems.includes(e))
      : engineers;
  const randomPair = engineerPool.sort(() => 0.5 - Math.random()).slice(0, 2);

  return randomPair;
};

const generateDaysObject = (start, end, items) => {
  var days = {};
  const today = new Date();
  var dt = new Date(start);
  var endDate = new Date(end);

  while (dt <= endDate) {
    const noYesterday = today.getDate() === dt.getDate();
    var daybefore = new Date(dt);
    daybefore.setDate(daybefore.getDate() - 1);

    var assignedEng = noYesterday
      ? assignEngineers(items)
      : assignEngineers(items, days[daybefore.toLocaleDateString()]);
    //var assignedEng = assignEngineers(items);
    var formatDate = new Date(dt).toLocaleDateString();
    days = { ...days, [formatDate]: assignedEng };
    dt.setDate(dt.getDate() + 1);
  }
  return days;
};

const Shifts = () => {
  const [value, onChange] = useState(new Date());

  const startDate = new Date();
  const endDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );

  const datesObj = generateDaysObject(startDate, endDate, engineers);

  const handleClickDay = (e) => {
    console.log(e, "will show the 2 workers today");
  };

  const setTileContent = (date, view) => {
    const formatedDate = date.toLocaleDateString();
    return view === "month" && datesObj[formatedDate] ? (
      <div>
        <p>{datesObj[formatedDate][0].name}</p>
        <p>{datesObj[formatedDate][1].name}</p>
      </div>
    ) : null;
  };

  return (
    <ShiftsContainer>
      shifts area
      <Calendar
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

export default Shifts;

const ShiftsContainer = styled(View)`
  padding: 20px;
  background-color: #e7e7e7;
  margin: 10px 0;

  border-radius: 10px;

  display: block;
`;
