import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreens from "../login/LoginScreens";
import Dashboard from "../dashboard/Dashboard";
import HandleThemeChange from "./HandleThemeChange";

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

/*
loginFormInfo,
  setLoginFormInfo,
  returningUserIsValidated,
  setReturningUserIsValidated,
  showPassword,
  setShowPassword,
  passwordInputType,
  setPasswordInputType,
  theme_id,
  setThemeId,
  loading,
  setLoading,
  emailError,
  setEmailError,
  theme,
  setTheme,
  loginType,
  setLoginType,
  socialMediaLoginData,
  setSocialMediaLoginData,
  newUserProfileInfo,
  setNewUserProfileInfo,
  newUserPreferences,
  setNewUserPreferences,
  loggedIn,
  setLoggedIn,
  routeToLogin,
  setRouteToLogin,
  createNewUser,
  setCreateNewUser,
  loginEmailIsTaken,
  setLoginEmailIsTaken,
  userData,
  setUserData,
  fetchError, 
  setFetchError
*/

//loginscreens
/*
loginFormInfo={loginFormInfo}
setLoginFormInfo={setLoginFormInfo}
returningUserIsValidated={returningUserIsValidated}
setReturningUserIsValidated={setReturningUserIsValidated}
showPassword={showPassword}
setShowPassword={setShowPassword}
passwordInputType={passwordInputType}
setPasswordInputType={setPasswordInputType}
theme_id={theme_id}
setThemeId={setThemeId}
loading={loading}
setLoading={setLoading}
emailError={emailError}
setEmailError={setEmailError}
theme={theme}
setTheme={setTheme}
loginType={loginType}
setLoginType={setLoginType}
socialMediaLoginData={socialMediaLoginData}
setSocialMediaLoginData={setSocialMediaLoginData}
newUserProfileInfo={newUserProfileInfo}
setNewUserProfileInfo={setNewUserProfileInfo}
newUserPreferences={newUserPreferences}
setNewUserPreferences={setNewUserPreferences}
loggedIn={loggedIn}
setLoggedIn={setLoggedIn}
routeToLogin={routeToLogin}
setRouteToLogin={setRouteToLogin}
createNewUser={createNewUser}
setCreateNewUser={setCreateNewUser}
loginEmailIsTaken={loginEmailIsTaken}
setLoginEmailIsTaken={setLoginEmailIsTaken}
userData={userData}
setUserData={setUserData}
fetchError={fetchError}
setFetchError={setFetchError}
*/