import React from "react";
import "./Header.css";
import logo200 from "../images/logo200.png"

export default function Header() {
  return (
    <div className="grid-x align-right align-middle">
      <div className="cell small-2 medium-1 align-self-middle">
        <img className="headerLogo" src={logo200} alt="motive-motor-logo"/>
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
