import React from "react";
import Leftsidebar from "../../components/Sidebar/leftsidebar";
import "./dashboard.css";
import Topbar from "../../components/Topbar/topbar";
import Main from "../../containers/Main/main";

const Dashboard = () => {
  return (
    <div className="app__dashboard-grid">
      <div className="app__dasboard-leftsidebar">
        <Leftsidebar />
      </div>
      <div className="app__dashboard-main">
        <Topbar />
        <Main/>
      </div>
    </div>
  );
};

export default Dashboard;
