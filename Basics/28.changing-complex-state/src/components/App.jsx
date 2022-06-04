import React, { useState } from "react";

function App() {
  /*

  // We are writing lengthy code, and usually fName, lName usually associated with other in complex forms
  // so can make some changes in useState(), to manage these kind of complex states 

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  function changeFname(event) {
    const firstName = event.target.value;
    setFname(firstName);
  }

  function changeLname(event) {
    const LastName = event.target.value;
    setLname(LastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={changeFname}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={changeLname}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );


  */

  // Managing complex state:
  // 1. In useState(), instead of storing simple value, we can store Object too.
  //    => useState() have initial state as object with name fullName (using destructuring concept).
  // 2. In HandleChange(), where we'll be changing value acc to input, but here we need to also have access to old state,
  //    as when use chnages fName only 1st input changes and lName (2nd input) remains as it is,
  //    for this we can use <input > element property/attribute 'name' (see in handleChange function)

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    // console.log(newValue); // shows the value user typed
    // console.log(inputName); // shows which input element triggered
    // But you'll notice on webpage, type input is not showing in those fields, why?
    // beacause:
    // value={fullName.fName}, value={fullName.lName}-> these are controlled components
    // => we initially setted their values as "", in useState & haven't updated them yet
    // using setFullName
    // NOTE: if comment value={fullName.fName}, value={fullName.lName} in corresponding
    //       <input/> element & it will become Uncontrolled component and then you can see
    // the value you type in input field in web page.
    // Continuing now.....
    // updating values according to the whatever <input> got triggered
    // prereq: How to update values in javascript object ! (simple hai)

    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newValue });
    // }

    // Now, you'll observe after applying above condition check, when we type lName,
    // fName values get deleted abd vice versa in web page (use ReactDev tool extension)
    // why ?
    // because when we are updating the vlaue in setFullName, it replaces the whole
    //  initial object in useState, we don't want this, we want to get hold of previous object's value
    //  and update that only part whose value got changed.
    // so, we'll pass a function in setFullName for doing this (now, i've commented the condition checked code)

    setFullName((prevObject) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevObject.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevObject.fName,
          lName: newValue,
        };
      }
    });
  }

  /*
   NOTE 1:Below is the final version of handleChange():

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevObject) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevObject.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevObject.fName,
          lName: newValue,
        };
      }
    });
  }

  NOTE 2: Below is the shorter way to write above function: (the way usually developers prefer)
  
  function handleChange(event) {
    
    // object Destructuring
    const {value,name} = event.target;

    setFullName((prevObject) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevObject.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevObject.fName,
          lName: value,
        };
      }
    });
  }
  // finalNOTE:
              don't use event.target.name (anything related to event directly in 
              setFullName (state setters), it will give error! Read Synthetic States for more details )
  */

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
