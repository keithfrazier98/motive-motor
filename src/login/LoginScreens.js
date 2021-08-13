import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLogin from "./DefaultLogin";
import FourOFour from "./FourOFour";
import { getUserProfile, testConnection } from "../utils/api";
import Header from "../common/Header";
import ErrorMessage from "../common/ErrorMessage";
import ReturningUserMessage from "./ReturningUserMessage";
import DefaultLoginBtns from "./DefaultLoginBtns.js";
import NewUser from "./NewUser.js";
import logo200 from "../images/logo200.png";
import LogInWithSocialMedia from "./LoginWithSocialMedia.js";
import * as EmailValidator from "email-validator";
import validateUser from "./ValidateUser.js";
import { createNewUserAPI } from "../utils/api.js";

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
        .then(console.log(userData))
        .then(history.push(`./dashboard?user_id=${userData.login.user_id}`))
        .catch(setFetchError)
    }
  }, [loggedIn, loginFormInfo]);

  function handleChange({ target: { id, value } }) {
    if (routeToLogin || emailError || loginEmailIsTaken) {
      setRouteToLogin(false);
      setEmailError(false);
      setLoginEmailIsTaken(false);
    }
    switch (loginType) {
      case "existing":
        setLoginFormInfo({ ...loginFormInfo, [id]: value });
        break;
      case "new":
        setLoginFormInfo({ ...loginFormInfo, [id]: value });
        setNewUserProfileInfo({
          ...newUserProfileInfo,
          ...loginFormInfo,
          [id]: value,
        });
        break;
      default:
        break;
    }
  }

  const returningCheckDependencies = {
    loginType: loginType,
    socialMediaLoginData: socialMediaLoginData,
    loginFormInfo: loginFormInfo,
    setLoginEmailIsTaken: setLoginEmailIsTaken,
    setReturningUserIsValidated: setReturningUserIsValidated,
    setLoggedIn: setLoggedIn,
    setRouteToLogin: setRouteToLogin,
    setEmailError: setEmailError,
    emailError: emailError,
    loginEmailIsTaken: loginEmailIsTaken,
    setLoginType: setLoginType,
    setUserData: setUserData,
  };

  const submitLogin = (event) => {
    //the "login" button is the only button that will call submit login with an event
    if (event && event.target.id === "login-form") {
      event.preventDefault();
      if (!fetchError) {
        const validEmail = EmailValidator.validate(loginFormInfo.email);
        if (validEmail) {
          validateUser("existing", returningCheckDependencies);
        } else {
          setRouteToLogin(false);
          setEmailError({ message: "Incorrect email format" });
        }
      }
    } else {
      switch (loginType) {
        // user selected "new user"
        case "new":
          validateUser("new", returningCheckDependencies);
          //submitCreateNewUserAPI();
          break;
        case "existing":
          validateUser("existing", returningCheckDependencies);
          break;
        case "social-media":
          validateUser("social-media", returningCheckDependencies);
          break;
        case "guest":
          validateUser("guest", returningCheckDependencies);
          break;
        default:
          console.log("switch on login failed");
          break;
      }
    }
  };

  const submitCreateNewUserAPI = () => {
    const abortController = new AbortController();
    createNewUserAPI(
      newUserProfileInfo,
      newUserPreferences,
      abortController.signal
    )
      .then((res) => {
        setUserData(res);
        setNewUserPreferences({});
        setNewUserProfileInfo({});
      })
      .then(() => {
        setLoggedIn(true);
        setReturningUserIsValidated(true);
        setLoading(true);
      })
      .catch((res) => {
        setEmailError(res);
      });
  };

  return (
    <>
      <Header setThemeId={setThemeId} theme={theme} />
      <div
        className={`grid-x grid-margin-y align-center align-middle ${theme.bkgd}`}
        style={{ height: "100%" }}
      >
        <div className="cell small-11 medium-4 large-3" style={{ zIndex: 1 }}>
          <div>
            <ErrorMessage error={fetchError} />
          </div>
          <div className="grid-x align-center">
            <h2 className="loginH2">Welcome!</h2>
            <img src={logo200} alt="motive-motor-logo" width="150px" />
            <p>
              {loginType === "new"
                ? "Let's get signed up:"
                : "Let's get logged in:"}
            </p>
          </div>
          <form id="login-form" onSubmit={submitLogin} className="loginForm">
            <div className="grid-x grid-margin-x grid-margin-y align-center text-center formButtons">
              <div
                className={`grid-y ${theme.bkgd} ${theme.fontColor}`}
                style={{ height: "100%" }}
              >
                <div className="grid-container">
                  <div className="grid-x align-middle align-center grid-margin-x">
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
                      submitLogin={submitLogin}
                      submitCreateNewUserAPI={submitCreateNewUserAPI}
                      handleChange={handleChange}
                    />

                    <NewUser
                      loading={loading}
                      setLoading={setLoading}
                      loginFormInfo={loginFormInfo}
                      theme={theme}
                      setTheme={setTheme}
                      theme_id={theme_id}
                      setThemeId={setThemeId}
                      newUserProfileInfo={newUserProfileInfo}
                      setNewUserProfileInfo={setNewUserProfileInfo}
                      newUserPreferences={newUserPreferences}
                      setNewUserPreferences={setNewUserPreferences}
                      handleChange={handleChange}
                      loginEmailIsTaken={loginEmailIsTaken}
                      setEmailError={setEmailError}
                      setLoginType={setLoginType}
                      submitCreateNewUserAPI={submitCreateNewUserAPI}
                      loginType={loginType}
                      passwordInputType={passwordInputType}
                      showPassword={showPassword}
                      routeToLogin={routeToLogin}
                      setLoginEmailIsTaken={setLoginEmailIsTaken}
                      setRouteToLogin={setRouteToLogin}
                      setLoginFormInfo={setLoginFormInfo}
                      setShowPassword={setShowPassword}
                      setPasswordInputType={setPasswordInputType}
                      setCreateNewUser={setCreateNewUser}
                      returningUserIsValidated={returningUserIsValidated}
                      setReturningUserIsValidated={setReturningUserIsValidated}
                      setLoggedIn={setLoggedIn}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="grid-x">
            <LogInWithSocialMedia
              setSocialMediaLoginData={setSocialMediaLoginData}
              submitLogin={submitLogin}
              submitCreateNewUserAPI={submitCreateNewUserAPI}
              setLoginFormInfo={setLoginFormInfo}
              setLoginType={setLoginType}
              setEmailError={setEmailError}
              loginType={loginType}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreens;
