import React, { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import DashboardMainCont from "../Components/DashboardMainCont/DashboardMainCont";
import ScrollToTop from "react-scroll-to-top";

function Dashboard() {


  const [pickedCard, setPickedCard] = useState("");
  const handleSideCardClick = (e) => {
    setPickedCard(e.target.innerText);
  };
  const handleAllClick = () => {
    setPickedCard("");
  };

  return (
    <div>
     {/* <div style={mystyle}> hi </div> */}
    <div className="d-flex justify-content-around container align-items-stretch">
      <ScrollToTop smooth color="#F64740" />
      <Sidebar
        title="Tags"
        handleClick={handleSideCardClick}
        handleAll={handleAllClick}
      />
      <DashboardMainCont filterCard={pickedCard} />

      </div>


    </div>
    
  );
}

export default Dashboard;
