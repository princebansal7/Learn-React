import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = true;
/*

function renderWithCondition() {
  if (isLoggedIn) {
    return <h1>Hello, you're in</h1>;
  } else {
    return <Login />;
  }
}    
// Replacing with ternary operator ,
   WHY ? => (if it is an expression too and not a statement => short code)

*/
function App() {
  // return <div className="container">{renderWithCondition()}</div>;

  return (
    <div className="container">
      {/* {(isLoggedIn===true) ? <h1>Hello , you're in</h1> : <Login />} */}

      {/* OR */}

      {isLoggedIn ? <h1>Hello , you're in</h1> : <Login />}
    </div>
  );
}

export default App;

/*

NOTE:

const currentTime = new Date(2022,05,27,15).getHours();
consol.log(currentTime);

currentTime>12 ? <h1>Working Late ?</h1> : null


We Know the short circuit concept in && opertor (from c++)

 (Expression1 && Expression2)
    false           true       => false (doesn't check 2nd condition if 1st is false)

So, we can do something like:

 currentTime>12 && <h1>Working Late ?</h1>

     true               true (In react, it means, it will render) => true (React usual way to implement this type of conditional statements)
     false              true (1st false => skipped and not renders)=> false (no need to use null and ternary too)

 => Above way is casual way that get implements in react and it simply means that
    if left condition is true, render the right part (and not check whether it's true or false)

  Extra:
     new Date();
       or
     new Date(year,month,day,time_24hr_format)


*/
