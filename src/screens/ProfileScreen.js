import "./ProfileScreen.css";
import React from "react";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav profileOpened={true} />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img className="avatar" src="avatar.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>{user.name}</h3>
              <PlansScreen />

              <button onClick={()=>auth.signOut()}  className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;
