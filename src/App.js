import React from "react";
import Button from "@material-ui/core/Button";
import Routes from "./components/modules/Routes";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Support Wheel Of Fate</h1>
        <Navbar />
        <Routes />
      </>
    );
  }
}

export default App;
