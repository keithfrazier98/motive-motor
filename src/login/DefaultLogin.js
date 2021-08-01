import React, { useEffect, useState } from "react";
import { isExistingUser } from "../utils/api.js";
import ErrorMessage from "../common/ErrorMessage.js";
import ReturningUserMessage from "./ReturningUserMessage";
import "../App.css";
import "./LoginScreen.css";
import Header from "../common/Header";
import logo200 from "../images/logo200.png";
import LogInWithSocialMedia from "./LoginWithSocialMedia.js";

function DefaultLogin({
  loginFormInfo,
  setLoginFormInfo,
  returningUserIsValidated,
  setReturningUserIsValidated,
  showPassword,
  setShowPassword,
  inputType,
  setInputType,
  themeId,
  setThemeId,
  loading,
  setLoading,
  emailError,
  setEmailError,
  theme,
  setTheme,
  setLoginType
}) {

  const [routeToLogin, setRouteToLogin] = useState(false)

  useEffect(() => {
    setLoading(true);
    handleThemeChange().then(createPageContent()).then(setLoading(false));
  }, [themeId, setLoading]);

  const handleThemeChange = () => {
    return new Promise((res) => {
      switch (themeId) {
        case "bw":
          setTheme({
            bkgd: "",
            fontColor: "",
            secBkgd: "",
            btnColor: "secondary",
            headerBkgd: "",
            navBkgd: "",
            container: "",
          });
          break;
        case "sunset":
          setTheme({
            bkgd: "sunsetMainBkgd",
            fontColor: "sunsetFont",
            secBkgd: "sunsetSecBkgd",
            btnColor: "sunsetButton",
            headerBkgd: "sunsetHeader",
            navBkgd: "sunsetNav",
            container: "sunsetContainer",
          });
          break;
        case "forest":
          setTheme({
            bkgd: "forestMainBkgd",
            fontColor: "forestFont",
            secBkgd: "forestSecBkgd",
            btnColor: "forestButton",
            headerBkgd: "forestHeader",
            navBkgd: "forestNav",
            container: "forestContainer",
          });
          break;
        default:
          break;
      }
    });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    if (!showPassword) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  async function checkForReturningUser(submitType){
    await isExistingUser(loginFormInfo.email)
      .then((response) => {
        if (response.password === loginFormInfo.password && submitType === "existing" ) {
          setReturningUserIsValidated(true);
        } else if (response.password === loginFormInfo.password && submitType === "new") {
          setRouteToLogin(true)
        }
      })
      .catch(setEmailError);
  };

  const handleChange = ({ target: { id, value } }) => {
    setLoginFormInfo({ ...loginFormInfo, [id]: value });
  };


  const submitLogin = (event) => {
    event.preventDefault();
      console.log(event.target.id)
    switch (event.target.id) {
      case "new":
        checkForReturningUser("new");
        break;

      default:
        checkForReturningUser("existing");
        break;
    }
  };

  const newUser = (event) => {
    if(window.confirm("Would you like to create a new account with this email and password?")){
      setLoading(true)
      setLoginType("new")
    }
  };

  const createPageContent = () => {
    return (
      <>
        <Header setThemeId={setThemeId} theme={theme} />
        <div
          className="grid-x grid-margin-y align-center align-middle"
          style={{ height: "100%" }}
        >
          <div className="cell small-11 medium-4 large-3">
            <div className="grid-x align-center">
              <h2 className="loginH2">Welcome!</h2>
              <img src={logo200} alt="motive-motor-logo" width="150px" />
            </div>
            <form onSubmit={submitLogin} className="loginForm">
              <div className="grid-container">
                <p>Let's get logged in:</p>
                <div>
                  <div className="grid-x align-middle align-center grid-margin-x">
                    <div className="cell medium-12">
                      <label htmlFor="username">Email:</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
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
                        type={inputType}
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
                        className={`button eye ${theme.btnColor}`}
                        onClick={handleShowPassword}
                      >
                        {showPassword ? (
                          <ion-icon name="eye-off"></ion-icon>
                        ) : (
                          <ion-icon name="eye-outline"></ion-icon>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-x grid-margin-x grid-margin-y align-center text-center formButtons">
                <ErrorMessage error={emailError} />
                {routeToLogin ? (
                  <ReturningUserMessage setReturningUserIsValidated={setReturningUserIsValidated}/>
                ) : null}
                <div className="cell small-4">
                  <button
                    className={`button ${theme.btnColor}`}
                    id="existing"
                    type="submit"
                  >
                    login
                  </button>
                </div>
                <div className="cell small-4">
                  <button
                    className={`button ${theme.btnColor}`}
                    id="new"
                    type="button"
                    onClick={submitLogin}
                  >
                    new user
                  </button>
                </div>
                <div className="cell small-4">
                  <button
                    className={`button ${theme.btnColor}`}
                    id="guest"
                    type="button"
                  >
                    guest
                  </button>
                </div>
                <LogInWithSocialMedia />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  let pageContent = createPageContent();
  return (
    <div
      className={`grid-y ${theme.bkgd} ${theme.fontColor}`}
      style={{ height: "100%" }}
    >
      {loading ? <h4>Loading ...</h4> : pageContent}
    </div>
  );
}

export default DefaultLogin;