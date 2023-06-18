// BASE_URL = "https://api.themoviedb.org/3/movie/27205"
import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import TrailerPage from './screens/TrailerPage';

function App() {
  const user = useSelector(selectUser);
  const isLoading = useSelector((state) => state.user.isLoading); // Add isLoading selector
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);


  if (isLoading) {
    // Show a loading screen while user state is being determined
    return <div className="loadingScreen"><img className="loadingImage" src="/loading1.gif" alt="loading"/></div>;
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/trailer/:term" element={<TrailerPage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
