import React, { useState, useEffect, useRef } from "react";
import Heading from "../../components/Heading/heading";
import "./works.css";
import Gif from "../../assets/gif.gif";
import Maskgroup1 from "../../assets/Mask group3.svg";
import Maskgroup2 from "../../assets/Mask group4.svg";

const Works = () => {
  const stepsData = [
    {
      number: 1,
      subtext: "Create your free account",
      note: "Click here to set up your Eazipay account.",
    },
    {
      number: 2,
      subtext: "Add Employee Data",
      note: "Your employee information is 100% safe and secure.",
    },
    {
      number: 3,
      subtext: "Prepare your Transaction",
      note: "Run payroll: Bulk Salaries and Compliance are done at once!",
    },
  ];

  return (
    <div className="app__steps" id="payroll">
      <Heading
        title="How Eazipay Works"
        subtext="Get started in 3 simple steps."
        titleFontSize="56px"
        subtextFontSize="28px"
        color="#515251"
      />
      <div className="app__steps_guidelines section__container">
        <div className="app__steps-video">
          <img src={Gif} alt="Animated GIF" />
        </div>
        <div className="app__steps-guide">
          {stepsData.map((step) => (
            <div key={step.number} className="app__steps-guide-data">
              <div>
                <h2>{step.number}</h2>
              </div>
              <p className="p__subtext">{step.subtext}</p>
              <br />
              <p className="p__note">{step.note}</p>
            </div>
          ))}
          <img src={Maskgroup1} alt="group-progress" className="image1" />
          <img src={Maskgroup2} alt="progress" className="image2" />
        </div>
      </div>
    </div>
  );
};

export default Works;
