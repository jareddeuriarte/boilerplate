import React from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import DashboardMainCont from "../Components/DashboardMainCont/DashboardMainCont";

function Dashboard() {
  return (
    <div className="d-flex justify-content-around container align-items-stretch">
      <Sidebar title="Most Used Boilerplates" />
      <DashboardMainCont />
    </div>
  );
}

export default Dashboard;
