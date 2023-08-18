import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
