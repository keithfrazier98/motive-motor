import React, { useEffect } from "react";
import "../App.css";
import "./Header.css";
import logo200 from "../images/logo200.png";

export default function Header({themeId, setThemeId, theme}) {

  const handleTheme = (event) => {
    event.preventDefault();
    setThemeId(event.target.id);
  };

  return (
    <div className={`grid-x align-right align-middle ${theme.navBkgd} ${theme.fontColor}`}>
      <div className="cell small-6 medium-9">
        <button id="sunset" onClick={handleTheme} className="button themeBtn sunsetButton">
          <ion-icon name="sunny-outline"></ion-icon>
        </button>
        <button id="forest" onClick={handleTheme} className="button themeBtn forestButton">
          <ion-icon name="leaf-outline"></ion-icon>
        </button>
        <button id="bw" onClick={handleTheme} className="hollow button secondary themeBtn">
          <ion-icon name="contrast-outline"></ion-icon>
        </button>
      </div>
      <div className="cell small-2 medium-1 align-self-middle">
        <img className="headerLogo" src={logo200} alt="motive-motor-logo" />
      </div>
      <div className="cell small-4 medium-2">
        <header>
          <h1 className="headerH1">Motive Motor</h1>
          <p className="headerSlogan">stay motivated</p>
        </header>
      </div>
    </div>
  );
}
