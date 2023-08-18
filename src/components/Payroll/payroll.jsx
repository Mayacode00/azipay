import React from "react";
import "./payroll.css";
import Calender from "../../assets/calender.svg";

const payroll = () => {
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const dayOptions = { weekday: "long" };
  const formattedDay = currentDate.toLocaleDateString(undefined, dayOptions);

  return (
    <div className="app__payroll-tabs">
      <div className="app__payroll-tabs_header">
        <h1>Next Payroll</h1>
      </div>
      <div className="app__payroll-tabs-date">
        <div className="date-container">
          <img src={Calender} alt="calender" />
          <p className="day">{formattedDay}</p>
        </div>
        <h1 className="formatted-date">{formattedDate}</h1>
      </div>
      <div className="app__payroll-tab-employee">
        <h2>Total Employee</h2>
        <h1>64</h1>
        <div className="app__payroll-tab-gender">
          <div className="app__payroll-tab-gender-male">
            <div />
            <h3>Male</h3>
            <h3>32</h3>
          </div>
          <div className="app__payroll-tab-gender-female">
            <div />
            <h3>Female</h3>
            <h3>32</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payroll;
