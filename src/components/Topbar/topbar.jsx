import React from "react";
import "./topbar.css";
import Logo from "../../assets/Company LOGO.svg";
import Notification from "../../assets/notification.svg";
import Picture from "../../assets/main_profile.jpg";
import Arrow from "../../assets/right-arrow.svg";
const Topbar = () => {
  return (
    <div className="app__topbar">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="app__topbar-profile">
        <div className="app__topbar-notification">
          <img src={Notification} alt="notify" />
          <div className="app__topbar-notification-amount">
            <p>7</p>
          </div>
        </div>
        <div className="app__topbar-profile-content">
          <div className="app__topbar-profile-image">
            <img src={Picture} alt="profile" />
          </div>
          <div className="app__topbar-profile-name">
            <h4>Kalu Abasiama</h4>
            <p>Admin</p>
          </div>
          <img src={Arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
