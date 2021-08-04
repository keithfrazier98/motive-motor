import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLogin from "./DefaultLogin";
import FourOFour from "./FourOFour";
import Guest from "./Guest";
import NewUser from "./NewUser";

function LoginScreens({
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
  loggedIn,
  setLoggedIn,
  newUserPreferences, 
  setNewUserPreferences, 
  newUserProfileInfo,
  setNewUserProfileInfo
}) {
  const history = useHistory();
  useEffect(() => {
    if (returningUserIsValidated === true && loginFormInfo) {
      history.push("./dashboard");
    }
  }, [returningUserIsValidated, loginFormInfo]);

  return (
    <>
      {loginType === "default" || loginType === "new" ? (
        <DefaultLogin
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
          newUserPreferences={newUserPreferences}
          setNewUserPreferences={setNewUserPreferences}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          newUserProfileInfo={newUserProfileInfo}
          setNewUserProfileInfo={setNewUserProfileInfo}
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
