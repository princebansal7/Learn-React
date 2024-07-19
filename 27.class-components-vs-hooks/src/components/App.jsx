import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

/*

// function component
   
    (We Already know about this)

    function App(){
      return <h1>Hello,I'm Functional Component</h1>
    }


// Class Component (was needed back then, because it was required in order to have 'state')
  How to make Class Component ?

   1. use keyword 'class' instead of 'function'
   2. remove () as it's not a function
   3. every class component must extends something from React eg: class Class_Name extends React.Component
   4. class returns elements/components in single div / jsx fragment like functional component but inside render() method
      so that we see the components/elements we want to render.
      Eg:

      class App extends React.Component {
        render() {
          return <h1>Hello, I'm Class Component</h1>;
        }
      }

Further understanding of class component is in "ClassComponent.jsx"

*/

class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

// function App() {
//   return <FunctionalComponent />;
// }

export default App;
