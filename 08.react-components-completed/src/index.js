import React from "react";
import ReactDOM from "react-dom";

// Importing App.jsx Component from component folder
// We can write full component name like App.jsx or App only.
// Internally React automatically coverts and manage the extension
import App from "./components/App";

// we coudld've made the component in src folder itself too, like this.

import Temp from "./TempComponent.jsx";

// So previously we were writing all the logics and html element in the entry file index.js itself,
// but Now, We will create React components concept
// 1. Here we  have created <App/> Component.
// 2. It will Always start from capital letter and  will be self closing as we learnt,
//    that either element will be either self closing in jsx file or we will close it by ourself
// 3. We are just adding Temp to show the components can reside in src folder too.

ReactDOM.render(
  <>
    <App />
    <Temp />
  </>,
  document.getElementById("root")
);
