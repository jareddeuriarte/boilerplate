import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Redirect, Route, useHistory } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";

// Landing page background logic
let numBalls = 50;
function balls() {
  const colors = ["#C4D6B0", "#477998", "#291F1E", "#F64740", "#F85F36"];
  let movingBalls = [];
  
  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    movingBalls.push(ball);
    document.body.append(ball);
  }

  // Keyframes
  movingBalls.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12,
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` },
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
}
//keeps balls from multiplying
function Landing() {
  useEffect(() => {
    balls();
  }, []);

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState([""]);
  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    // const { password, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.signupUser({
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => {
          console.log("Yay we are here", res);
        if (res.status === 200) { 
          numBalls = 0;
          history.push("/dashboard")
        }

        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="wrapper">
      <div>
        <h1 className="title">Boilerplate</h1>
        <div className="d-flex justify-content-between">
          <div>
            <div>
              <form action="">
                <legend className="mb-1">Sign-up</legend>
                <div className="mb-3">
                  <input
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    className="form-control input"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email"
                  ></input>
                </div>
                <div className="mb-3">
                  <input
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    className="form-control input"
                    id="password"
                    aria-describedby="passwordhelp"
                    placeholder="password"
                  ></input>
                </div>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  id="button"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div>
            <div>
              <form action="">
                <legend className="mb-1">Login</legend>
                <div className="mb-3">
                  <input
                    // onChange={handleInputChange}
                    type="email"
                    className="form-control input"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email"
                  ></input>
                </div>
                <div className="mb-3">
                  <input
                    // onChange={handleInputChange}
                    type="password"
                    className="form-control input"
                    id="password"
                    aria-describedby="passwordhelp"
                    placeholder="password"
                  ></input>
                </div>
                <button
                  // onClick={handleFormSubmit}
                  type="submit"
                  id="button"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
