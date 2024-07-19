import React from "react";

var isDone = false;

// Imperative style code (This will work)
// => This works because we are getting hold of the item then setting some new values

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

// Declarative style code (This will not work)
// => this doesn't work beacause, elements are being rendered so they are not changable
//    they have to re-render on the screen in order to get changes in their properties to be seen

// for this we'll learn "HOOKS" => they are functions that allow us to hook into state of app and read & modify it

// function strike() {
//   isDone = true;
// }

// function unStrike() {
//   isDone = false;
// }

function App() {
  return (
    <div>
      {/* 
                Buy milk is depending on the state variable 'isDone',
                that means acc to this, styling got applied on Buy milk in our UI.

            ->   This style of programming is called 'Declarative programming'
                => we are declaring values accoding to which we decides how our UI looks depending
                on it's state.

            ->  Other style is 'Imperative programming'
                that we are doing using javascript, 
                eg: document.getElementById("root").style.textDecoration = "line-through";
                ( we are imperatively telling the element to do some changes)

       */}

      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>

      {/* We are just changing the style using the buttons  */}

      <button onClick={strike}>Line Maar</button>
      <button onClick={unStrike}>Line Hataa</button>
    </div>
  );
}

export default App;
