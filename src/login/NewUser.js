import React, { useEffect } from "react";
import DefaultLoginFields from "./DefaultLoginFields";
import NewUserBtns from "./NewUserBtns";
import ErrorMessage from "../common/ErrorMessage";
import ReturningUserMessage from "./ReturningUserMessage";
function NewUser({
  loading,
  setLoading,
  loginFormInfo,
  theme,
  setTheme,
  theme_id,
  setThemeId,
  newUserProfileInfo,
  setNewUserProfileInfo,
  newUserPreferences,
  setNewUserPreferences,
  handleChange,
  loginEmailIsTaken,
  emailError,
  setEmailError,
  setLoginType,
  loginType,
  passwordInputType,
  showPassword,
  routeToLogin,
  setLoginEmailIsTaken,
  setRouteToLogin,
  setLoginFormInfo,
  setShowPassword,
  setPasswordInputType,
  setCreateNewUser,
  returningUserIsValidated, 
  setReturningUserIsValidated,
  setLoggedIn,
  resetStates
}) {
  useEffect(() => {
    setNewUserProfileInfo({ ...loginFormInfo, ...newUserProfileInfo });
    setNewUserPreferences({ ["theme_id"]: theme_id });
    setLoading(false);
  }, [loginFormInfo, theme_id]);

  const pageContent = (
    <>
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
          setCreateNewUser={setCreateNewUser}
          setLoginType={setLoginType}
          handleChange={handleChange}
        />

        <div className="cell medium-12">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Ricky"
            required
            onChange={handleChange}
            value={newUserProfileInfo.first_name}
          />
          <label>Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Bobby"
            required
            onChange={handleChange}
            value={newUserProfileInfo.last_name}
          ></input>
        </div>
        <ErrorMessage error={emailError} />
        <NewUserBtns
          loginEmailIsTaken={loginEmailIsTaken}
          emailError={emailError}
          setEmailError={setEmailError}
          setLoginType={setLoginType}
          theme={theme}
          loginType={loginType}
          setCreateNewUser={setCreateNewUser}
          resetStates={resetStates}
        />
      </>
    </>
  );


  {}
  return routeToLogin ? (
    <ReturningUserMessage
      returningUserIsValidated={returningUserIsValidated}
      setReturningUserIsValidated={setReturningUserIsValidated}
      setLoginType={setLoginType}
      setLoading={setLoading}
      setLoggedIn={setLoggedIn}
      setEmailError={setEmailError}
      setRouteToLogin={setRouteToLogin}
      resetStates={resetStates}
    />
  ) : loginType === "new" ? pageContent : null;
}

export default NewUser;
