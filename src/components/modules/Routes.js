import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EngList from "./EngList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <EngList />} />
        <Route path="/shifts" render={() => <p>shifts route</p>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
