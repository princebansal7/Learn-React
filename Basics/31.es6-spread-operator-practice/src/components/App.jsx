import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // for saving the input states and updaing it
  const [listItems, setListIterms] = useState([]); // for saving the input in array

  function handleChnage(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addTodoItem() {
    setListIterms((oldItems) => {
      return [...oldItems, inputText];
    });
    setInputText(""); // After adding input setting to the input field empty again
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChnage} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}

          {listItems.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// We didn't make seperate components, and all of the work gets done in single App componnets
// this is not the usual way to work in react
// In the next module, we'll make seperate components and learn how to manage them.
