import React, { useEffect, useState } from "react";
import ErrorMessage from "../common/ErrorMessage.js";
import "../App.css";
import "./LoginScreen.css";
import SignUpWithSocialMediaMessage from "./SignUpWIthSocialMediaMessage.js";
import HandleThemeChange from "../common/HandleThemeChange.js";
import DefaultLoginFields from "./DefaultLoginFields.js";
import DefaultLoginBtns from "./DefaultLoginBtns.js";

function DefaultLogin({
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
  loggedIn,
  setLoggedIn,
  newUserPreferences,
  setNewUserPreferences,
  newUserProfileInfo,
  setNewUserProfileInfo,
  routeToLogin,
  setRouteToLogin,
  createNewUser,
  setCreateNewUser,
  loginEmailIsTaken,
  setLoginEmailIsTaken,
  userData,
  setUserData,
  fetchError,
  setFetchError,
  submitLogin,
  submitCreateNewUserAPI,
  handleChange,
}) {
  useEffect(() => {
    setLoginType("existing");
  }, []);

  useEffect(() => {
    setLoading(true);
    HandleThemeChange(theme_id, setTheme)
      .then(createPageContent())
      .then(setLoading(false));
  }, [theme_id, setLoading]);

  useEffect(() => {
    if (createNewUser) {
      submitLogin();
    }
  }, [createNewUser]);

  useEffect(() => {
    if (loginType === "social-media") submitLogin();
  }, [loginType]);

  const createPageContent = () => {
    return (
      <>
        {loginType === "social-media" && emailError ? (
          <SignUpWithSocialMediaMessage
            socialMediaLoginData={socialMediaLoginData}
            submitCreateNewUserAPI={submitCreateNewUserAPI}
            setNewUserPreferences={setNewUserPreferences}
            setNewUserProfileInfo={setNewUserProfileInfo}
            setCreateNewUser={setCreateNewUser}
            setEmailError={setEmailError}
            theme_id={theme_id}
            setLoginType={setLoginType}
            theme={theme}
          />
        ) : (
          <>
            <DefaultLoginFields
              loginFormInfo={loginFormInfo}
              passwordInputType={passwordInputType}
              theme={theme}
              showPassword={showPassword}
              loginType={loginType}
              loading={loading}
              setLoading={setLoading}
              setTheme={setTheme}
              newUserProfileInfo={newUserProfileInfo}
              setNewUserProfileInfo={setNewUserProfileInfo}
              newUserPreferences={newUserPreferences}
              setNewUserPreferences={setNewUserPreferences}
              loginEmailIsTaken={loginEmailIsTaken}
              routeToLogin={routeToLogin}
              emailError={emailError}
              setLoginEmailIsTaken={setLoginEmailIsTaken}
              setEmailError={setEmailError}
              setRouteToLogin={setRouteToLogin}
              setLoginFormInfo={setLoginFormInfo}
              setThemeId={setThemeId}
              theme_id={theme_id}
              setShowPassword={setShowPassword}
              setPasswordInputType={setPasswordInputType}
              handleChange={handleChange}
              setCreateNewUser={setCreateNewUser}
              setLoginType={setLoginType}
            />
            <ErrorMessage error={emailError} />
          </>
        )}
        <DefaultLoginBtns
          theme={theme}
          setCreateNewUser={setCreateNewUser}
          setLoginType={setLoginType}
          fetchError={fetchError}
        />
      </>
    );
  };

  return loginType === "existing" || loginType === "social-media" ? (
    <> {createPageContent()}</>
  ) : null;
}

export default DefaultLogin;
