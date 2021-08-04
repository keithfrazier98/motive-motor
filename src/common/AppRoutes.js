import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreens from "../login/LoginScreens";
import Dashboard from "../dashboard/Dashboard";

export default function AppRoutes({
  loginFormInfo,
  setLoginFormInfo,
  returningUserIsValidated,
  setReturningUserIsValidated,
  showPassword,
  setShowPassword,
  passwordInputType,
  setPasswordInputType,
  themeId,
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
}) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginScreens
          loginFormInfo={loginFormInfo}
          setLoginFormInfo={setLoginFormInfo}
          returningUserIsValidated={returningUserIsValidated}
          setReturningUserIsValidated={setReturningUserIsValidated}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          passwordInputType={passwordInputType}
          setPasswordInputType={setPasswordInputType}
          themeId={themeId}
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
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
