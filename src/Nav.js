import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  }, []);
  
  return (
    <div className={`nav ${show && "nav__black" }`}>
      <div className="nav__content">
        <img className="nav__logo" src="logo.png" alt="" />
        <img className="nav__avatar" src="avatar.png" alt="" />
      </div>
    </div>
  );
};

export default Nav;
