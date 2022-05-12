import React from "react";
import Entry from "./Entry.jsx";
import Emojis from "../emojipedia.js";

/*                      TASKS:
    We need to convert these fucntuons to Arrow functions
*/

/*  Without Arrow functions:

            function createEntry(emojiObj) {
              return (
                <Entry
                  key={emojiObj.id}
                  emj={emojiObj.emoji}
                  name={emojiObj.name}
                  means={emojiObj.meaning}
                />
              );
            }

            function App() {
              return (
                <div>
                  <h1>
                    <span>emojipedia</span>
                  </h1>

                  <dl className="dictionary">{Emojis.map(createEntry)}</dl>
                </div>
              );
}
*/

/* With Arrow functions:

              const createEntry = (emojiObj) => (
                <Entry
                  key={emojiObj.id}
                  emj={emojiObj.emoji}
                  name={emojiObj.name}
                  means={emojiObj.meaning}
                />
              );


              const App = () => (
                <div>
                  <h1>
                    <span>emojipedia</span>
                  </h1>

                  <dl className="dictionary">{Emojis.map(createEntry)}</dl>
                </div>
              );

*/

// everywhere arrow functions used here:

const App = () => (
  <div>
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">
      {Emojis.map((emojiObj) => (
        <Entry
          key={emojiObj.id}
          emj={emojiObj.emoji}
          name={emojiObj.name}
          means={emojiObj.meaning}
        />
      ))}
    </dl>
  </div>
);

export default App;
