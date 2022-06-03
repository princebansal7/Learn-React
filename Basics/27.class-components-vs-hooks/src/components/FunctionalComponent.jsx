import React, { useState } from "react";

// see, how short and easy it is with hook (functinal component)

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      {/* <button onClick={increase}>+</button> */}

      {/* Shorter way using Arrow function */}

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default FunctionalComponent;
