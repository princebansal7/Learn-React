import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";

// 1. In App component => Card component have img prop which have value coming from contacts.js

// Let's use Avatar component in App
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* using Avatar compnent */}

      <Avatar image={contacts[0].imgURL} />

      {/* In the next folder we'll see how to shink  (using Mapping) the below code where we repeatatively using contacts[] */}

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
