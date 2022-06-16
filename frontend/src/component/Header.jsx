import React from "react";
import './Header.css'
import userIcon from '../images/User_icon.png'
import down from '../images/down.png'

const Header = () =>{

    return (
    <div className="header-container">
      <div className="header-id"> </div>
      <div className="logout">
        <img className="user" src={userIcon} alt="user" />

        <div className="username"></div>

        <img
          className="down" src={down} alt="data"   />
      </div>
    </div>
  );
}

export default Header;