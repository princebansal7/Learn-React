import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    // WAY-1
    // const inputName = event.target.name;
    // const newValue = event.target.value;

    // WAY-2
    const { name, value } = event.target;

    setContact((newObj) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: newObj.lName,
          email: newObj.email,
        };
      } else if (name === "lName") {
        return {
          fName: newObj.fName,
          lName: value,
          email: newObj.email,
        };
      } else if (name === "email") {
        return {
          fName: newObj.fName,
          lName: newObj.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

/*
NOTE:
As you can see, above code is very lengthy, we can shorten it by using Javascript ES6 spread operator.
which we will learn in next module.
*/
export default App;
