import React, { useEffect, useState } from "react";
import "../App.css";
import "./Header.css";
import logo200 from "../images/logo200.png";

export default function Header({ theme, setThemeId, setLoading }) {

  return (
    <div
      className={`grid-x align-right align-middle ${theme.fontColor}`}
    >
      <div className="cell small-6 medium-9">
        <button
          id="sunset"
          onClick={() => {setThemeId("sunset")}}
          className="button themeBtn sunsetButton"
        >
          <ion-icon name="sunny-outline"></ion-icon>
        </button>
        <button
          id="forest"
          onClick={()=>{setThemeId("forest")}}
          className="button themeBtn forestButton"
        >
          <ion-icon name="leaf-outline"></ion-icon>
        </button>
        <button
          id="bw"
          onClick={()=>{setThemeId("bw")}}
          className="hollow button secondary themeBtn"
        >
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
