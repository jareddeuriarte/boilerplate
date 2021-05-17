import React from "react";
import "./style.css";

const SideBarCard = (props) => {
  return (
    <>
      <div onClick={props.handleClick} className="card mt-2" id="card-hover">
        <div className="card-body py-0 ">
          <h5 className="card-title mt-2 text-center h5 ">{props.title}</h5>
        </div>
      </div>
    </>
  );
};

export default SideBarCard;
