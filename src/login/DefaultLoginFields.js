import React from "react";
import '../App.css'
import NewUser from "./NewUser";


function DefaultLoginFields({
  loginFormInfo,
  passwordInputType,
  theme,
  showPassword,
  loginType,
  loading,
  setLoading,
  setTheme,
  newUserProfileInfo,
  setNewUserProfileInfo,
  newUserPreferences,
  setNewUserPreferences,
  loginEmailIsTaken,
  routeToLogin,
  emailError,
  setLoginEmailIsTaken,
  setEmailError,
  setRouteToLogin,
  setLoginFormInfo,
  setThemeId,
  theme_id,
  setShowPassword, 
  setPasswordInputType, 
  
}) {
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

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    if (!showPassword) {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  };

  return (
    <div className="grid-container">
      <div className="grid-x align-middle align-center grid-margin-x">
        <div className="cell medium-12">
          <label htmlFor="username">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="rickyBobby@email.com"
            required
            value={loginFormInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="cell small-10">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type={passwordInputType}
            placeholder="password"
            required
            minLength="8"
            autoComplete="current-password"
            value={loginFormInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className={`cell small-2`}>
          <button
            className={`button eye ${theme.btnColor} roundedCorners`}
            onClick={handleShowPassword}
            
          >
            {showPassword ? (
              <ion-icon name="eye-off"></ion-icon>
            ) : (
              <ion-icon name="eye-outline"></ion-icon>
            )}
          </button>
        </div>
        {loginType === "new" ? (
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
          />
        ) : null}
      </div>
    </div>
  );
}

export default DefaultLoginFields;
