import React from "react";
import Heading from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes.js";

/* 

const Notes = (notesObj) => (
   <Note key={notesObj.key} title={notesObj.title} data={notesObj.content} />
);
 or 

 can write directly in map()
 
*/

function App() {
  return (
    <>
      <Heading />
      {notes.map((notesObj) => (
        <Note
          key={notesObj.key}
          title={notesObj.title}
          data={notesObj.content}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
