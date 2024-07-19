import React, { useState } from "react";

/*  Understanding:- 

  const state = React.useState(); // comes from react module => React.useState() or
  we can directly import it too
  => import {useState} from "react"
  
  useState() is array of two things:-
    1st value is: any value which is considered as starting / initial state
    2nd value is: a function

  we can access the value as: state[0] (array concept)
  it automatically updates and renders on screen too, which makes our code efficient.
  (but it's bad practice to use state[0] like notation in react), so we'll apply JS ES6 concept:
  
  JavaScript ES6 Destructing array concept:

  Avoid:
   eg: const rgb = [9,132,127] 
       rgb[0]  // 9
       rgb[1]  // 132
       rgb[2]  // 127
    
   Now, Using Destructuring concept we can do like:

   const [red,green,blue] = [9,132,127]

   we can direcly use name now,  as:
    red is mapped with 9, => red // 9
    green --> 132,        => green // 132
    blue --> 127          => blue // 127

    => we can do like:
       const [count] = useState(69);
       
  Now, How to use this value and update it using useState() ?
   we Know it takes 2nd argument as function.
   => const [count, setCount] = useState(69);
       we can use this function (setCount (any name):2nd argument in useState) to update the
       initial value of our state.

    Below implementation will clear things out.

 */

function App() {
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  // const state = useState(69);

  // const [count] = useState(69);

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* <h1>{state[0]}</h1> */}

      <h1>{count}</h1>
      <button onClick={increase}>+</button>

      {/* let's decrease the value */}

      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
