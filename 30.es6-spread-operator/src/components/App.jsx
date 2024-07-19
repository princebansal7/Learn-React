import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // Old long Way:
    // setContact((newObjPrevValue) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: newObjPrevValue.lName,
    //       email: newObjPrevValue.email,
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: newObjPrevValue.fName,
    //       lName: value,
    //       email: newObjPrevValue.email,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: newObjPrevValue.fName,
    //       lName: newObjPrevValue.lName,
    //       email: value,
    //     };
    //   }
    // });

    // ------Using Spread operator:----------------

    // setContact((newObjPrevValue) => {
    //   return {
    //     ...newObjPrevValue,

    //     // name: value, // won't work, beacause it get interpreted as we want to add new key value pair.
    //     // event.target.name: value,  // Wrong, as we should never use event in setstate

    //     [name]: value, // correct way after ES6
    //   };
    // });

    // Clean Code:

    setContact((newObjPrevValue) => {
      return {
        ...newObjPrevValue,
        [name]: value,
      };
    });

    // Shorter way to write above code:

    // setContact((newObjValue) => ({ ...newObjValue, [name]: value })); // avoid as not good for beginners
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
