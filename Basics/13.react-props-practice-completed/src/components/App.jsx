import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";

// Here we are using contact.js to pass the values to props in Card component
// We are using contact.js array to make the code more readable unlike we did in previous folder (12) !
// But still using Array this way is lot of work, and there are many fancy way to avoid it, we'll see in that
// in upcoming folders..

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
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
      />
    </div>
  );
}

export default App;
