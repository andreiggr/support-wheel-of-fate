import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Routes from "./Routes";
import mockEng from "../../utils/mockData";
import { connect } from "react-redux";
import { getData } from "../../actions/getData";
import getEngineers from "../../actions/getEngineers";

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
    var formatDate = new Date(dt).toLocaleDateString();
    days = { ...days, [formatDate]: assignedEng };
    dt.setDate(dt.getDate() + 1);
  }
  return days;
};

const Main = ({ handleSetData, handleSetEngineers, engineers }) => {
  useEffect(() => {
    if (!engineers) {
      handleSetEngineers(mockEng);
    }
    const startDate = new Date();
    const endDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    );

    if (engineers) {
      const datesObj = generateDaysObject(startDate, endDate, engineers);
      handleSetData(datesObj);
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Routes />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    shifts: state.data,
    engineers: state.engineers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetData: (i) => dispatch(getData(i)),
    handleSetEngineers: (e) => dispatch(getEngineers(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
