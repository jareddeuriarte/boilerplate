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
    <div className="header-wrapper d-flex justify-content-between align-items-baseline center container mt-3">
      <div className="d-flex align-items-center">
        <a id="heading" href="/dashboard">
          <h1 className="mr-1">boilerplate</h1>
        </a>
        <a id="duck" href="/dashboard" className="mb-2 ml-2">
          <img
            id="duck"
            src="../../images/rubber-duck.png"
            alt="rubber duck"
          ></img>
        </a>
      </div>
      <div className="d-flex align-items-center mt-4">
        {window.location.pathname !== "/" ? (
          <a href="/add" className="mr-2 add-snippet">
            Add snippet
          </a>
        ) : null}

        <div className="mr-3 d-flex justify-content-between">
          {window.location.pathname !== "/" ? (
            <a href="/" className="mr-2 login-logout">
              Logout
            </a>
          ) : null}
          {dark ? (
            <div>
              <i
                className="login-logout"
                onClick={darkMode}
                className="fas fa-lg fa-sun  icon"
              ></i>
            </div>
          ) : (
            <div>
              <i
                onClick={darkMode}
                className="far fa-lg fa-moon  pb-1 icon"
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
