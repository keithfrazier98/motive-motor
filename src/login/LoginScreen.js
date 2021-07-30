import React, { useState } from "react";
import logo200 from "../images/logo200.png";
import "./LoginScreen.css";
import Header from "../common/Header";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

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

  return (
    <div className="grid-y" style={{ height: "100vh" }}>
      <Header />
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
                  <div className="cell small-2">
                    <button
                      className="button secondary eye"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <ion-icon name="eye-off"></ion-icon>
                      ) : (
                        <ion-icon name="eye-outline"></ion-icon>
                      )}
                    </button>
                  </div>
                  <div className="cell small-3">
                    <button className="button secondary" type="submit">
                      login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
