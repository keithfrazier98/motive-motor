import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLogin from "./DefaultLogin";
import FourOFour from "./FourOFour";
import Guest from "./Guest";

function LoginScreens({
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
}) {
  const history = useHistory();
  useEffect(() => {
    if (loggedIn === true && loginFormInfo) {
      history.push("./dashboard");
    }
  }, [loggedIn, loginFormInfo]);

  return (
    <>
      {loginType === "existing" || loginType === "new" || "social-media" ? (
        <DefaultLogin
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
          newUserPreferences={newUserPreferences}
          setNewUserPreferences={setNewUserPreferences}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          newUserProfileInfo={newUserProfileInfo}
          setNewUserProfileInfo={setNewUserProfileInfo}
          routeToLogin = {routeToLogin}
        setRouteToLogin = {setRouteToLogin}
        createNewUser = {createNewUser}
        setCreateNewUser = {setCreateNewUser}
        loginEmailIsTaken = {loginEmailIsTaken}
        setLoginEmailIsTaken = {setLoginEmailIsTaken}
          
        />
      ) : loginType === "guest" ? (
        <Guest />
      ) : (
        <FourOFour />
      )}
    </>
  );
}

export default LoginScreens;
