import React from "react";
import AddPageMainCont from "../Components/AddPageMainCont/AddPageMainCont";
import Sidebar2 from "../Components/SideBar2/SideBar2";

function AddSnippet() {
  return (
    <div className="header-wrapper">
      <div className="d-flex justify-content-around container align-items-stretch">
        {/* <Sidebar2 title="Categories" /> */}
        <AddPageMainCont />
      </div>
    </div>
  );
}

export default AddSnippet;
