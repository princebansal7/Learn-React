import React from "react";
import ReactDOM from "react-dom";

const name = "Prince Bansal";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>This is an example of rendring JS expression in JSX.</p>
    <p>Things to remember: </p>
    <ul>
      <li>
        In react jsx file we follow camel casing when we use variables &
        function name.
      </li>
      <li>
        We are writing HTML and JS code in single jsx file. But internally JSX
        is coverting all the code in JS code using babel compiler.
      </li>
      <li>
        That's why expressions and variables must be enclosed within curly
        braces.
      </li>
    </ul>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
