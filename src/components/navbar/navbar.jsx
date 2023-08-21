import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#individual">individual</a>
        </li>
        <li>
          <a href="#business">business</a>
        </li>
        <li>
          <Link to="/">pricing</Link>
        </li>
        <li>
          <a href="#payroll">set your payroll</a>
        </li>
      </ul>
      <div className="app__navbar-register">
        <Link to="/dashboard" className="app__navbar-register_login">
          login
        </Link>
        <div />
        <Link to="/" className="app__navbar-register_reg">
          register
        </Link>
      </div>
      <div className="app__navbar-menu">
        {toggleMenu ? (
          <CgClose
            color="11453b"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <CgMenuRight
            color="11453b"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-menu_container scale-up-center">
            <div className="app__navbar-menu_container-links">
              <ul>
                <li>
                  <a href="#individual" onClick={() => setToggleMenu(false)}>
                    individual
                  </a>
                </li>
                <li>
                  <a href="#business" onClick={() => setToggleMenu(false)}>
                    business
                  </a>
                </li>
                <li>
                  <Link to="/" onClick={() => setToggleMenu(false)}>
                    pricing
                  </Link>
                </li>
                <li>
                  <a href="#payroll" onClick={() => setToggleMenu(false)}>
                    set your payroll
                  </a>
                </li>
              </ul>
              <div className="app__navbar-menu_container-links-sign">
                <Link
                  to="/dashboard"
                  className="app__navbar-register_login"
                  onClick={() => setToggleMenu(false)}
                >
                  login
                </Link>
                <div />
                <Link
                  to="/"
                  className="app__navbar-register_reg"
                  onClick={() => setToggleMenu(false)}
                >
                  register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
