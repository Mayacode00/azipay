import React from "react";
import Frame2 from "../../assets/Frame 26.svg";
import Frame3 from "../../assets/Group36.svg";
import "./demo.css";
import Form from "../../components/Form/form";

const Demo = () => {
  return (
    <div className="app__demo" id="business">
      <img src={Frame3} className="app__demo-background" />
      <img className="app__demo-frame" src={Frame2} />
      <div className="app__demo-container">
        <div className="app__demo-container_note">
          <h3>Get an Exclusive Demo of Eazipay</h3>
          <p>
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.
          </p>
        </div>
        <div className="app__demo-container_form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Demo;
