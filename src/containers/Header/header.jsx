import React from "react";
import "./header.css";
import HeaderImg from "../../assets/header.svg";
import Appstore from "../../assets/appstore.svg";
import Google from "../../assets/google.svg";

const Header = () => {
  return (
    <div className="app__header section__container">
      <div className="app__header-note">
        <h1 className="">
          run your <span className="span-payroll">payroll</span>{" "}
          <span className="span-easily">easily</span> in{" "}
          <span className="span-seconds">seconds</span>
        </h1>
        <p>
          We’ve built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </p>
        <button className="app__header-note_button">
          start using free, forever
        </button>
        <div className="app__header-note_download">
          <p>Download the Eazipay App</p>
          <div className="app__header-note_download-options">
            <div className="image">
              <img src={Appstore} />
            </div>
            <div className="image">
              <img src={Google} className="google" />
            </div>
          </div>
        </div>
      </div>
      <div className="app__header-image">
        <img src={HeaderImg} />
      </div>
    </div>
  );
};

export default Header;
