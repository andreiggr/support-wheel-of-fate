import Axios from "axios";

function setData(data) {
  return {
    type: "GET_DATA",
    data,
  };
}

function addEngineer(name) {
  return {
    type: "ADD_ENGINEER",
    name,
  };
}

export function getData(data) {
  return (dispatch) => {
    dispatch(setData(data));
    // TODO connect with api

    // Axios.get(url, {
    //   headers: {
    //     accept: "application/json",
    //   },
    // })
    //   .then((res) => {
    //     const resData = res.data;
    //     return resData;
    //   })
    //   .then((data) => dispatch(setData(data.items)))
    //   .catch((error) => console.log("oops", error));
  };
}
