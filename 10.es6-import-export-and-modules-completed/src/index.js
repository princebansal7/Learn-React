import React from "react";
import ReactDOM from "react-dom";

// here we are seeing how to Import multiple function from single js file.
// order in curley braces doesn't matter.

import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <>
    <h1>Importing and Exporting Understanding</h1>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </>,
  document.getElementById("root")
);
