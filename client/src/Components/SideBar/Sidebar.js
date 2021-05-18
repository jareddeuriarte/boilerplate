import React, { useState, useEffect } from "react";
import SideBarCard from "../SideBarCard/SideBarCard";
import "./style.css";
import API from "../../utils/API";

const Sidebar = (props) => {
  const [titleArr, setTitleArr] = useState([]);
  let arr = [];
  const list = () => {
    API.getSnippets().then((res) => {
      let arr = [];
      for (let each of res.data) {
        for (let string of each.tag) {
          string
            .split(",")
            .forEach((e) =>
              e.trim() === "" ? null : arr.push(e.toUpperCase())
            );
        }
      }
      console.log(arr);
      let uniqueArr = arr.filter((a, b) => arr.indexOf(a) === b);
      console.log(uniqueArr);
      setTitleArr(uniqueArr);
    });
  };
  useEffect(() => {
    list();
  }, []);
  return (
    <div id="sidebar" className="col-2 m-2">
      <h5 className="h4 text-center font-weight-bold mt-3">{props.title}</h5>
      <div onClick={props.handleAll} className="card mt-2 py-4" id="all-card">
        <div className="card-body  py-0">
          <h5 className="card-title mt-2 text-center h5 ">ALL</h5>
        </div>
      </div>
      {titleArr.map((title) => {
        return <SideBarCard title={title} handleClick={props.handleClick} />;
      })}
    </div>
  );
};

export default Sidebar;
