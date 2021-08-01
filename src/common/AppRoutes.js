import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreens from "../login/LoginScreens";
import Dashboard from "../dashboard/Dashboard"


export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
          <LoginScreens/>
      </Route>
      <Route path="dashboard">
      <Dashboard/>
      </Route>
    </Switch>
  );
}
