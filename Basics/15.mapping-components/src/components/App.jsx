import React from "react";
import Card from "./Card";
import contact from "../contacts.js";

/*

    Now We'll use mapping concept to shink this contact[] array repetative code
    1. contacts.map() => map() function loops through the whole contact array and pass it's element one by one to the inside function
    2. conacts.map(createCard) => map() passes elements to 'createCard' function made by Us.
    3. Card components is being rendered using a loop type function (map), so react create virtual DOM for us,
      for efficient use it need to have unique id property & this poperty must be called 'key'.

      NOTE:
             In that array where map() loops through, there must be a unique key present, which we get using 
            'key'. It is not for us, it basically for react, so that it can maintain the dom tree structure
             and render components efficiently.

*/

function createCard(contactObj) {
  return (
    // Unique id property called 'key' (must)
    <Card
      key={contactObj.id} // we can't access this as props , we have to make seperately
      unique={contactObj.id} // we can access this
      name={contactObj.name}
      img={contactObj.imgURL}
      tel={contactObj.phone}
      email={contactObj.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* WAY-2 (New Way) */}
      {/* We are using map() and our createCard function to avoid repetative code */}

      {contact.map(createCard)}

      {/* WAY-1 (old Way) */}

      {/* <Card
        name={contact[0].name}
        img={contact[0].imgURL}
        tel={contact[0].phone}
        email={contact[0].email}
      />
      <Card
        name={contact[1].name}
        img={contact[1].imgURL}
        tel={contact[1].phone}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        img={contact[2].imgURL}
        tel={contact[2].phone}
        email={contact[2].email}
      /> */}
    </div>
  );
}

export default App;
