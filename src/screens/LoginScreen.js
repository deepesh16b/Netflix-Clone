import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signInPage, setSignInPage] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="logo.png" alt="" />
        {!signInPage ? (
          <button
            onClick={() => setSignInPage(true)}
            className="loginScreen__button"
          >
            Sign In
          </button>
        ) : (
          <></>
        )}
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signInPage ? (
            <SignUpScreen Email={enteredEmail} />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input
                    type="email"
                    value={enteredEmail}
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    placeholder="Email address"
                  />
                  <button
                    onClick={() => setSignInPage(true)}
                    className="loginScreen__getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
