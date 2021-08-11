import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLogin from "./DefaultLogin";
import FourOFour from "./FourOFour";
import { getUserProfile, testConnection } from "../utils/api";

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
  userData,
  setUserData,
  fetchError,
  setFetchError,
}) {
  useEffect(() => {
    testConnection().then(setFetchError(false)).catch(setFetchError);
  }, []);

  const history = useHistory();
  useEffect(() => {
    if (loggedIn === true && loginFormInfo) {
      const abortController = new AbortController();
      getUserProfile(userData.login.user_id, abortController.signal)
        .then(setUserData)
        .catch(setFetchError)
        .then(history.push(`./dashboard`));
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
        />
      ) : (
        <FourOFour />
      )}
    </>
  );
}

export default LoginScreens;
