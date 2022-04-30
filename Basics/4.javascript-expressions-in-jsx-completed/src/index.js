import React from "react";
import ReactDOM from "react-dom";

const fName = "Prince";
const lName = "Bansal";
const num = 7;

ReactDOM.render(
  <div>
    <p>
      Here we are just practising JavaScript in JSX file using variables and
      expressions!
    </p>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your Favourite number is {num}</p>
  </div>,
  document.getElementById("root")
);
