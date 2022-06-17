import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addTodoItem(inputText) {
    setListItems((oldItems) => {
      return [...oldItems, inputText];
    });
  }

  function deleteItem(id) {
    setListItems((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAddItem={addTodoItem} />
      <div>
        <ul>
          {listItems.map((todoItems, index) => (
            <ToDoItem
              key={index}
              id={index}
              itemText={todoItems}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
