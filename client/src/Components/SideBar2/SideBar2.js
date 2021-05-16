import React from "react";
import SideBarCard from "../SideBarCard/SideBarCard";
import "./style.css";

const Sidebar2 = (props) => {
  return (
    <div id="sidebar" className="col-2 m-2">
      <h5 className="h4 text-center font-weight-bold mt-3">{props.title}</h5>
      <SideBarCard title="CSS" />
      <SideBarCard title="HTML%" />
      <SideBarCard title="NodeJS" />
      <SideBarCard title="JavaScript" />
      <SideBarCard title="MySQL" />
      <SideBarCard title="Mongoose" />
    </div>
  );
};

export default Sidebar2;
