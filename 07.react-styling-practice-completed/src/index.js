// We Will the perform the following tasks:-

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

// creating js constants and applying logic for dynamically changing greeting message and time
const date = new Date();
const currentTime = date.getHours();

let greeting; // greeting variable

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning"; // changing greeting message dynamically
  customStyle.color = "red"; // changing color dynamically
} else if (currentTime < 18) {
  greeting = "Good Afternoon"; // changing greeting message dynamically
  customStyle.color = "green"; // changing color dynamically
} else {
  greeting = "Good Night"; // changing greeting message dynamically
  customStyle.color = "blue"; // changing color dynamically
}

// logic is done, now using above js logic to render in out index.html file

ReactDOM.render(
  <div>
    <h3 style={{ color: "grey" }}>
      We are showing Dynamically changing color and greeting message for our
      heading.
    </h3>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
