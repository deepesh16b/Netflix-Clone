import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <img className="nav__logo" src="logo.png" alt="" />
        <img className="nav__avatar" src="avatar.png" alt=""/>
      </div>
    </div>
  );
};

export default Nav;
