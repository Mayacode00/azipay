import React from "react";
import "./tabs.css";
import User from "../../assets/user.svg";
import Wallet from "../../assets/wallet2.svg";
import Paper from "../../assets/paperplane.svg";
import Loan from "../../assets/hand.svg";

const Tabs = () => {
  const tabsIcon = [
    {
      imgUrl: User,
      links: "Add Employee",
    },
    {
      imgUrl: Wallet,
      links: "Pay Salaries",
    },
    {
      imgUrl: Paper,
      links: "Pay Compliance",
    },
    {
      imgUrl: Loan,
      links: "Quick Loan",
    },
  ];

  return (
    <div className="app__tabs-container">
      {tabsIcon.map((tab, index) => (
        <div className="app__tabs-item" key={index}>
          <img src={tab.imgUrl} alt={`Tab Icon ${index}`} />
          <p>{tab.links}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
