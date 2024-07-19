//TASKS:
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

import React from "react";
import ReactDOM from "react-dom";

// WAY-1
import { add, subtract, multiply, divide } from "./calculator";

//WAY-2 (Importing everything)
import * as CAL from "./calculator.js";

ReactDOM.render(
  <>
    <p>WAY-1</p>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
    <p>WAY-2</p>
    <ul>
      <li>{CAL.add(1, 2)}</li>
      <li>{CAL.multiply(2, 3)}</li>
      <li>{CAL.subtract(7, 2)}</li>
      <li>{CAL.divide(5, 2)}</li>
    </ul>
  </>,
  document.getElementById("root")
);
