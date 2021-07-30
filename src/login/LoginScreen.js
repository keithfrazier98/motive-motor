import React, { useEffect, useState } from "react";
import logo200 from "../images/logo200.png";
import "../App.css";
import "./LoginScreen.css";
import Header from "../common/Header";

export default function LoginScreen() {
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
    handleThemeChange()
    .then(createPageContent())
    .then(setLoading(false));
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
    if (showPassword) {
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

  const createPageContent = () => {
    return (
      <>
        <Header setThemeId={setThemeId} theme={theme} setLoading={setLoading} />
        <div
          className="grid-x grid-margin-y align-center align-middle"
          style={{ height: "100%" }}
        >
          <div className="cell small-11 medium-4 large-3">
            <div className="grid-x align-center">
              <h2 className="loginH2">Welcome!</h2>
              <img src={logo200} alt="motive-motor-logo" width="150px" />
            </div>
            <form className="loginForm">
              <div className="grid-container">
                <p>Let's get logged in:</p>

                <div>
                  <div className="grid-x align-middle align-center grid-margin-x">
                    <div className="cell medium-12">
                      <label for="username">Username:</label>
                      <input
                        id="username"
                        name="username"
                        type="email"
                        placeholder="johndoe@email.com"
                        required
                        height="2.5rem"
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
                        height="2.5rem"
                        minLength="8"
                        autoComplete="current-password"
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
              <div className="grid-x grid-margin-x align-center text-center formButtons">
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`} type="submit">
                    login
                  </button>
                </div>
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`}>
                    new user
                  </button>
                </div>
                <div className="cell small-4">
                  <button className={`button ${theme.btnColor}`}>guest</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  let pageContent = createPageContent()
  return (
    <div
      className={`grid-y ${theme.bkgd} ${theme.fontColor}`}
      style={{ height: "100vh" }}
    >
      {loading ? loadingContent : pageContent}
    </div>
  );
}
