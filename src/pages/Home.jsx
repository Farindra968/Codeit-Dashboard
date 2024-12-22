import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="`flex overflow-hidden ">
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className=" pt-14 flex  h-screen ">
        <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <div className="w-full  h-screen overflow-auto px-4">
          {/* Main Outlet */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
