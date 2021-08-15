import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreens from "../login/LoginScreens";
import Dashboard from "../dashboard/Dashboard";

export default function AppRoutes({
  globalStates
}) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginScreens
         globalStates={globalStates}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard globalStates={globalStates} />
      </Route>
    </Switch>
  );
}
