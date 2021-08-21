import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EngList from "./EngList";
import Shifts from "./Shifts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <EngList />} />
        <Route path="/shifts" render={() => <Shifts />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
