import React from "react";
import Wallet from "../../components/Wallet/wallet";
import "./main.css";
import Tabs from "../../components/Tabs/tabs";
import Payroll from "../../components/Payroll/payroll";
import Flow from "../../assets/INFLOW.svg";
import Activities from "../../components/Activities/activities";

const Main = () => {
  return (
    <div className="app__main">
      <div className="app__main-welcome">
        <h1>welcome abasiama</h1>
        <p>Pay and manage your employee in minutes</p>
      </div>
      <div className="app__main-grid">
        <div className="app__main-grid_data">
          <Wallet />
          <Tabs />
        </div>
        <div>
          <Payroll />
        </div>
      </div>
      {/* made the flow chat an image since there isnt a direct call for it now */}
      <div className="flowchat">
        <img src={Flow} alt="chart" />
      </div>
      <Activities />
    </div>
  );
};

export default Main;
