import React from "react";
import "./activities.css";

const ActivitiesTab = () => {
  const generateDateRange = () => {
    const dateRange = [];
    const currentDate = new Date();

    for (let i = 0; i < 11; i++) {
      const currentDateCopy = new Date(currentDate);
      currentDateCopy.setDate(currentDate.getDate() - i);
      dateRange.push(currentDateCopy);
    }

    return dateRange;
  };

  const dummyData = generateDateRange().map((date, index) => ({
    date: date,
    time: "10:30",
    payrollUser: "BM",
    username: "Bashiru Modal",
    count: 5,
  }));

  return (
    <div className="app__activities-container">
      {dummyData.map((data, index) => (
        <div key={index}>
          <h2>
            {data.date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h2>
          <div className="app__activity-item">
            <div className="activity-type">
              <p>Payroll</p>
              <div className="profile-image-conatiner">
                <div className="profile-image">
                  <p>{data.payrollUser}</p>
                </div>
                <h4>{data.username}</h4>
              </div>
            </div>
            <div className="app__activity-data">
              <p>Activity</p>
              <h4>
                Paid{" "}
                {data.date.toLocaleDateString("en-US", {
                  month: "long",
                })}{" "}
                {data.date.getFullYear()}, salary
              </h4>
            </div>
            <div className="app__activity-data">
              <p>Employee</p>
              <h4>{data.count}</h4>
            </div>
            <div className="app__activity-data">
              <p>Time</p>
              <h4 className="time">{data.time}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesTab;
