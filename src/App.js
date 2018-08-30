import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "./Main";
import LvlOne from "./LvlOne";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/test" component={Main} />
        <Route path="/lvl_one" component={LvlOne} />
        <Redirect exact from="/" to="/test" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
