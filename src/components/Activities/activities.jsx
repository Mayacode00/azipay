import React from "react";
import "./activities.css";
import Search from "../../assets/search.svg";
import Filter from "../../assets/equalizer.svg";
import ActivitiesTab from "./activitiesTab";

const Activities = () => {
  return (
    <div className="app__activities">
      <h1>Recent Activities</h1>
      <div className="app__activities-filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search employee"
          />
          <div className="search-icon">
            <img src={Search} alt="search" />
          </div>
        </div>
        <div className="app__activities-button">
          <img src={Filter} />
          <p>Filter</p>
        </div>
      </div>
      <ActivitiesTab/>
    </div>
  );
};

export default Activities;
