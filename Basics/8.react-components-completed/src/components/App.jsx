import React from "react";

// Here we are importing Heading and List functional component we made seperately
import Heading from "./Heading";
import List from "./List";

// Component is nothing just a simple javaScript function which returns either HTML elements
// or Different Components
// if we are returning Multiple elements or components, they should be enclosed in single <div></div>
// or
// single jsx fragment : <></>
// Benefits of making Components are:
// 1. Code Readabiliy
// 2. We can use the Components multiple times as many times as we want.
// 3. We just have to import the componets which we will use in our jsx file.
// NOTE:  when we use npx cretae-react-app 
//        usually App.js or App.jsx is starting file of Reat app.

function App() {
  return (
    <div>
      <Heading />
      <List />
      <List />
    </div>
  );
}

export default App;
