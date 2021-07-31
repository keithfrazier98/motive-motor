import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { isExistingUser } from "../utils/api.js";
import "../App.css";
import "./LoginScreen.css";
import Header from "../common/Header";
import logo200 from "../images/logo200.png";

export default function LoginScreen() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [themeId, setThemeId] = useState("bw");
  const [loading, setLoading] = useState("false");
  const [theme, setTheme] = useState({
    bkgd: "",
    fontColor: "",
    secBkgd: "",
    btnColor: "",
    headerBkgd: "",
    navBkgd: "",
    container: "",
  });

  useEffect(() => {
    setLoading(true);
    handleThemeChange().then(createPageContent()).then(setLoading(false));
  }, [themeId]);

  const handleThemeChange = () => {
    return new Promise((res) => {
      console.log(themeId);
      switch (themeId) {
        case "bw":
          console.log("bw");
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
          console.log("sunset");
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
          console.log("forest");
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
          console.log(theme);
          break;
      }
    });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    console.log(inputType);
    if (!showPassword) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const loadingContent = (
    <>
      <h4>Loading ...</h4>
    </>
  );

  const responseGoogle = (response) => {
    console.log(response.email);
  };

  const logout = () => {};

  const checkForReturningUser = () => {};

  const handleChange = ({ target: { id, value } }) => {
    setLoginInfo({ ...loginInfo, [id]: value });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    isExistingUser(loginInfo.email).then(console.log)
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
                      <label for="username">Email:</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        required
                        value={loginInfo.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="cell small-10">
                      <label for="password">Password:</label>
                      <input
                        id="password"
                        name="password"
                        type={inputType}
                        placeholder="password"
                        required
                        minLength="8"
                        autoComplete="current-password"
                        value={loginInfo.password}
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
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`} type="submit">
                    login
                  </button>
                </div>
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`} type="submit">
                    new user
                  </button>
                </div>
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`} type="button">
                    guest
                  </button>
                </div>
                <div className="cell small-12">
                  <GoogleLogin
                    clientId="659209002109-g9b7na56k40o4a8dvfs1nim8sg4e3qo5.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <GoogleLoginButton />
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                  />{" "}
                </div>
                <div className="cell small-12">
                  <div
                    class="fb-login-button"
                    data-width=""
                    data-size="large"
                    data-button-type="login_with"
                    data-layout="default"
                    data-auto-logout-link="true"
                    data-use-continue-as="false"
                  ></div>
                </div>
                <div>
                  <GoogleLogout
                    clientId="659209002109-g9b7na56k40o4a8dvfs1nim8sg4e3qo5.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                  ></GoogleLogout>
                </div>
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
      {loading ? loadingContent : pageContent}
    </div>
  );
}
