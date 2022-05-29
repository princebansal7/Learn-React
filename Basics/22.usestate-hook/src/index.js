import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Initially
/*

ReactDOM.render(
  <div className="container">
    <h1>0</h1>
    <button>+</button>
  </div>,
  document.getElementById("root")
);

*/

/* 
Beginner Way:

It won't update count on screen, beacuse those elements relying on ReactDom to render them on the screen.
so we have to re-render them again so that they can get update on the screen

var cnt = 0;

function increase() {
  cnt++;
  console.log(cnt);
}

ReactDOM.render(
  <div className="container">
    <h1>{cnt}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);

*/

/* 
Naive way:

// Re-rendering Again in increase function
// But this is repetative and not the react way to implement
// So, we'll learn useState hook for solving this efficiently

var cnt = 0;

function increase() {
  cnt++;
  // Rendering again
  ReactDOM.render(
    <div className="container">
      <h1>{cnt}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{cnt}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);

*/

// Using useState() Hook
// Rules for using Hooks:
//  1. You must have a functional component to use hooks.
//  => Making App.jsx component now, and doing the further coding there
