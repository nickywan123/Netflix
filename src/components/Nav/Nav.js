import React from "react";
import netflixlogo from "./logo.svg";
import "./Nav.scss";

function nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={netflixlogo} alt="Netflix Logo" />
      </div>
      <div className="buttonSignIn">
        <button className="signIn">Sign In</button>
      </div>
    </nav>
  );
}

export default nav;
