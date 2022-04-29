import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <p>
      Here we are Returning list element and Heading to HTML div with class
      "root".
    </p>
    <h2>Moods</h2>
    <ul>
      <li>Bad</li>
      <li>Good</li>
      <li>Confused</li>
    </ul>
  </div>,
  document.getElementById("root")
);
