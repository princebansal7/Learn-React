import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));  // Old Way (ReactDom.render() is no longer supported in 18+ versions)

const root = ReactDOM.createRoot(document.getElementById("root")); // New Way
root.render(<App />);
