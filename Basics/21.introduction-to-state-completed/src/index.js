import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

/*
    State is simply some changes in UI according to some varible at some particular values.
    also, that's why these variables are called state variables.
    eg: let water is UI
        => at 'temp'=50 deg it changes it state to water
        => at 'temp'=-2 deg it changes it state to ice
    'temp' is state varible, which changes the state of our UI acc to different values

    let see the eg: in our App.jsx component
    => there will be a state variable according to which we'll strikethrough whether milk is brought or not.

    Imperative style eg: (read in App.jsx)
    document.getElementById("root").style.textDecoration = "line-through";
    will produce the same result as: <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
*/
