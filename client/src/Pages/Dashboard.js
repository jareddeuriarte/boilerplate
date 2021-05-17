import React, { useState } from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import DashboardMainCont from "../Components/DashboardMainCont/DashboardMainCont";
import ScrollToTop from "react-scroll-to-top";

function Dashboard() {

  const [pickedCard, setPickedCard] = useState("");
  const handleSideCardClick = (e) => {
    setPickedCard(e.target.innerText);
  };

  return (
    <div className="d-flex justify-content-around container align-items-stretch">
      <ScrollToTop smooth />
      <Sidebar
        title="Most Used Boilerplates"
        handleClick={handleSideCardClick}
      />
      <DashboardMainCont filterCard={pickedCard} />

    </div>
  );
}

export default Dashboard;
