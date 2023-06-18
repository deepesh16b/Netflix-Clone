import "./SignUpScreen.css";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";

const SignUpScreen = ({ Email }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [enteredEmail, setEnteredEmail] = useState(Email);
  const [isNewUser, setIsNewUser] = useState(false);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: The email address is badly formatted. (auth/invalid-email)."
        )
          alert("Please enter correct Email and Password!");
        else alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // alert("Signed In");
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
        )
          alert("Looks like you are new to Netflix, click on 'Sign-Up Now'");
        else alert(error.message);
        // "'"
      });
  };

  return (
    <div className="signupScreen">
      <form>
        {isNewUser ? <h1>Sign Up</h1> : <h1>Sign In</h1>}

        <input
          ref={emailRef}
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input ref={passwordRef} type="password" placeholder="Password" />
        {isNewUser ? (
          <button
            type="submit"
            onClick={(e) => {
              register(e);
            }}
          >
            Sign Up
          </button>
        ) : (
          <button
            type="submit"
            onClick={(e) => {
              signIn(e);
            }}
          >
            Sign In
          </button>
        )}
        {isNewUser ? (
          <h4>
            <span className="signupScreen__gray">Already a Member? </span>
            <span
              className="signupScreen__link"
              onClick={() => {
                setIsNewUser(false);
              }}
            >
              Sign in now.
            </span>
          </h4>
        ) : (
          <h4>
            <span className="signupScreen__gray">New to Netflix? </span>
            <span
              className="signupScreen__link"
              onClick={() => {
                setIsNewUser(true);
              }}
            >
              Sign up now.
            </span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default SignUpScreen;
