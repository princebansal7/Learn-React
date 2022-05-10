import React from "react";
import Entry from "./Entry.jsx";
import Emojis from "../emojipedia.js";

/*                                   TASKS                              
    1. Create Entry Component
    2. Create props to contain HardCoded data
    3. To avoid writing repeatative code => use map()
    => map through the emojipedia array and render Entry component.
                          
                                  UNDERSTANDING
      Working of map():-
     
      Emojis.map(createEntry) =>
              a) map() function will loop through 'Emojis' or 'emojipedia' Array (which we exported after
                 creating it seperatly) one by one through each of it's elements.
              b) map() takes a function argument (in this case 'createEntry' function) & passes those array
                 elements to this function.
             c) Now using this createEntry(), we can modify our component without wrting them again and again
                as shown in below Example.
                
            NOTE:
             In that array where map() loops through, there must be a unique key present, which we get using 
            'key'. It is not for us, it basically for react, so that it can maintain the dom tree structure
             and render components efficiently.
*/

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

      <dl className="dictionary">
        {/*========WAY-3 (using map) =======================================================================
        => using, map doing in just 1 line */}

        {Emojis.map(createEntry)}

        {/*======= WAY-2=====================================================================================
         (writing multiple components acc to need, but at some point it becomes repeatative too) */}

        {/*
         <Entry
          emj="💪"
          name="Tense Biceps"
          means="
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym."
         /> 

         <Entry
          emj=".."
          name="......"
          means="
            “You .........."
         /> 
         ....
         ....
        
        */}

        {/*=========WAY-1=====================================================================================
         (very Hectic and Long way) */}

        {/* 
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div> 

        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            “You can do that!” or “I feel strong!” Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div> 
        
          .....
          .....
          .....

        */}
      </dl>
    </div>
  );
}

export default App;
