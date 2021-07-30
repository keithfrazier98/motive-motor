import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../login/LoginScreen";
import Navigation from "./Navigation"


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
          <LoginScreen/>
      </Route>
    </Switch>
  );
}
