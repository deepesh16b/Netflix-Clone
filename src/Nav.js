import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = ({profileOpened} ) => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={window.screen.width > 800 ? "/logo.png" : "/favicon.png"}
          alt=""
        />
        {profileOpened? (
          <img
            onClick={() => navigate(-1)}
            className="nav__avatar"
            src="/avatar.png"
            alt=""
          />
        ) : (
          <img
            onClick={() => navigate("/profile")}
            className="nav__avatar"
            src="/avatar.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
