import React, { useState } from "react";
import AppRoutes from "./AppRoutes";

// AppStates is called to render by app.js
//

function AppStates() {
  //loading and errors (x3)
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [fetchError, setFetchError] = useState("");

  //forms / settings / data (x4)
  const [loginFormInfo, setLoginFormInfo] = useState({
    email: "",
    password: "",
  });
  const [theme, setTheme] = useState({
    bkgd: "",
    fontColor: "",
    secBkgd: "",
    btnColor: "",
    headerBkgd: "",
    navBkgd: "",
    container: "",
  });
  const [newUserProfileInfo, setNewUserProfileInfo] = useState({
    first_name: "",
    last_name: "",
  });
  const [theme_id, setThemeId] = useState("bw");

  //login dependancy states (x10)
  const [returningUserIsValidated, setReturningUserIsValidated] =
    useState(false);
  const [loginType, setLoginType] = useState("existing");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [socialMediaLoginData, setSocialMediaLoginData] = useState(false);
  const [newUserPreferences, setNewUserPreferences] = useState({
    theme_id: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [routeToLogin, setRouteToLogin] = useState(false);
  const [createNewUser, setCreateNewUser] = useState(false);
  const [loginEmailIsTaken, setLoginEmailIsTaken] = useState(false);

  //dashboard dependancy states (x1)
  const [userData, setUserData] = useState(false);

  return (
    <>
      <AppRoutes
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
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        newUserPreferences={newUserPreferences}
        setNewUserPreferences={setNewUserPreferences}
        routeToLogin={routeToLogin}
        setRouteToLogin={setRouteToLogin}
        createNewUser={createNewUser}
        setCreateNewUser={setCreateNewUser}
        loginEmailIsTaken={loginEmailIsTaken}
        setLoginEmailIsTaken={setLoginEmailIsTaken}
        userData={userData}
        setUserData={setUserData}
        fetchError = {fetchError}
        setFetchError = {setFetchError}
      />
    </>
  );
}

export default AppStates;
