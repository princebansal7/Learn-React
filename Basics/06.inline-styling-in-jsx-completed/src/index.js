import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>
      Hello, I Chnaged this heading color using JavaScript Object customStyle!
    </h1>
    <p style={{ color: "purple" }}>
      We can't use Inline style = "color:blue" inside in html element because
      inside jsx file. style expects a value not string.
    </p>
  </div>,
  document.getElementById("root")
);
