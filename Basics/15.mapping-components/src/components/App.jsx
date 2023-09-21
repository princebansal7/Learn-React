import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";

/*

    Now We'll use mapping concept to shink this contacts[] array repetative code
    1. contacts.map() => map() function loops through the whole contacts array and pass it's element one by one to the inside function
    2. contacts.map(createCard) => map() passes elements to 'createCard' function made by Us.
    3. Card components is being rendered using a loop type function (map), so react create virtual DOM for us,
      for efficient use it need to have unique id property & this poperty must be called 'key'.

      NOTE:
             In that array where map() loops through, there must be a unique key present, which we get using 
            'key'. It is not for us, it basically for react, so that it can maintain the dom tree structure
             and render components efficiently.

*/

function createCard(contactsObj) {
  return (
    // Unique id property called 'key' (must)
    <Card
      key={contactsObj.id} // we can't access this as props, we have to make another prop seperately to use id for our use
      unique={contactsObj.id} //we created another prop called 'unique' and  we can access this for our use
      name={contactsObj.name}
      img={contactsObj.imgURL}
      tel={contactsObj.phone}
      email={contactsObj.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contactss</h1>
      {/* WAY-1 (old Way) */}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}

      {/* WAY-2 (New Way) */}

      {/* We are using map() and our createCard function to avoid repetative code.
          contacts is array of object and each object of this array is being passed one by one using map()
          in createCard function reference */}

      {contacts.map(createCard)}

    </div>
  );
}

export default App;
