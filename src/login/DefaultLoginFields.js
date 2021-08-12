import React from "react";
import "../App.css";
import DefaultLoginBtns from "./DefaultLoginBtns";

function DefaultLoginFields({
  loginFormInfo,
  passwordInputType,
  theme,
  showPassword,
  loginType,
  setShowPassword,
  setPasswordInputType,
  setCreateNewUser,
  setLoginType,
  handleChange,
}) {
  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    if (!showPassword) {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  };

  const defaultLoginFields = (
    <>
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
    </>
  );

  return defaultLoginFields;
  /*
  return loginType === "existing" || loginType === "social-media"
    ? defaultLoginFields
    : null;*/
}

export default DefaultLoginFields;

