import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./leftsidebar.css";
import Logo from "../../assets/sidebarlogo.svg";
import { sidebarLinks, sidebarLinkstwo } from "../../constant";
import DropdownArrowIcon from "../../assets/arrow.svg"; // Import your dropdown arrow icon

const Leftsidebar = () => {
  const location = useLocation();

  return (
    <div className="app__leftsidebar">
      <div className="app__leftsidebar-logo">
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="app__leftsidebar-links-container">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname.includes(link.route);
          const shouldShowImage =
            link.route !== "/dashboard" && link.route !== "/wallet";

          return (
            <div key={link.label} className="app__leftsidebar-link">
              <Link
                to={link.route}
                className={`${
                  isActive
                    ? "app__leftsidebar-active"
                    : "app__leftsidebar-nonactive"
                }`}
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                />

                <p className="">{link.label}</p>
                {shouldShowImage && (
                  <img
                    src={DropdownArrowIcon}
                    alt="Dropdown Arrow"
                    className={`dropdown-arrow ${isActive ? "rotate" : ""}`}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="app__leftsidebar-support">
        {sidebarLinkstwo.map((link) => {
          const isActive = location.pathname.includes(link.route);
          const shouldShowImage = link.route !== "/support";

          return (
            <div key={link.label} className="app__leftsidebar-link">
              <Link
                to={link.route}
                className={`${
                  isActive
                    ? "app__leftsidebar-active"
                    : "app__leftsidebar-nonactive"
                }`}
              >
                <img
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                />

                <p className="">{link.label}</p>
                {shouldShowImage && (
                  <img
                    src={DropdownArrowIcon}
                    alt="Dropdown Arrow"
                    className={`dropdown-arrow-two ${isActive ? "rotate" : ""}`}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leftsidebar;
