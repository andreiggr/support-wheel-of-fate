import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <p>first route</p>} />
        <Route path="/shifts" render={() => <p>shifts route</p>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
