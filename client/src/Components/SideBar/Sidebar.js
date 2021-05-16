import React from "react";
import SideBarCard from "../SideBarCard/SideBarCard";
import "./style.css";

const Sidebar = (props) => {
  return (
    <div id="sidebar" className="col-2 m-2">
      <h5 className="h4 text-center font-weight-bold mt-3">{props.title}</h5>
      <SideBarCard title="For Loop" />
      <SideBarCard title="React Class" />
      <SideBarCard title="IFFE" />
      <SideBarCard title="Express Route" />
      <SideBarCard title="React Index" />
      <SideBarCard title="Dishes" />
    </div>
  );
};

export default Sidebar;



