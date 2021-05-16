import React from "react";

const SideBarCard = (props) => {
  return (
    <>
      <div className="card mt-2">
        <div className="card-body py-0 ">
          <h5 className="card-title mt-2 text-center h5 ">{props.title}</h5>
        </div>
      </div>
    </>
  );
};

export default SideBarCard;
