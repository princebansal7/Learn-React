import React from "react";
import ReactDOM from "react-dom";

// Single div: <div></div>
// Single JSX fragment: <></>

ReactDOM.render(
  <div>
    <h1>Hello Everyone!</h1>
    <p>
      This is how you can render html elements from js file to html document div
      have class "root" using ReactDOM.
    </p>
    <p>
      As here we are using multiple elements so they have to be contained in
      single div or single jsx fragement..
    </p>
  </div>,
  document.getElementById("root")
);
