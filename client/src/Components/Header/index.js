import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import "./style.css";

function Header() {
  const storage = JSON.parse(localStorage.getItem("dark"));
  const [dark, setDark] = useState(storage);

  useEffect(() => {
    if (dark) {
      darkMode2();
    }
  }, []);

  const root = document.querySelector("#root");
  const html = document.querySelector("html");
  const snippetTitle = document.querySelector(".snippet-title");

  const darkMode = () => {
    localStorage.setItem("dark", !dark);
    setDark(!dark);
    root.classList.toggle("dark-mode");
    html.classList.toggle("dark-mode");
  };

  const darkMode2 = () => {
    root.classList.toggle("dark-mode");
    html.classList.toggle("dark-mode");
  };
  return (
    <div className="header-wrapper d-flex justify-content-between container mt-3">
      <div className="d-flex">
        <a id="heading" href="/landing">
          <h1 className="mr-1">boilerplate</h1>
        </a>
        <a id="duck" href="/landing">
          <img src="../../images/rubber-duck.png" alt="rubber duck"></img>
        </a>
      </div>
      <div className="d-flex align-content-middle ">
        <div className="mr-3">
          {window.location.pathname !== "/landing" ? (
            <a href="/landing" className="mr-2 login-logout">
              Logout
            </a>
          ) : null}
          {dark ? (
            <i
              className="login-logout"
              onClick={darkMode}
              className="far fa-sun login-logout"
            ></i>
          ) : (
            <i
              onClick={darkMode}
              className="far fa-moon login-logout pb-1 "
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
