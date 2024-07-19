import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false); // to have variable which changes state acc to mouseOver event

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMousedOver() {
    setMouseOver(true); // when mouseOver event happens, changing initial state from false to true
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      {/* <button onClick={handleClick}>Submit</button> */}

      {/* <button style={{ backgroundColor: "black" }} onClick={handleClick}>
        Submit
      </button> */}

      <button
        onClick={handleClick}
        onMouseOver={handleMousedOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
