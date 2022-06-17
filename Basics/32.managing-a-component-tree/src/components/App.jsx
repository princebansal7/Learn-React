import React, { useState } from "react";
import ToDoItem from "./ToDoItems";

// 4.
// Now, what if we want to delete the items from listItems state
// => reaching from ToDoItem component to it's parent App component (see in 4th point in ToDoItems component)

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChnage(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addTodoItem() {
    setListItems((oldItems) => {
      return [...oldItems, inputText];
    });
    setInputText("");
  }

  // passing id from child component "ToDoItem"
  function deleteItem(id) {
    // console.log("delteItem invoked from child ToDoItem Component div");
    // deleting items from listItems array
    // console.log(id);

    // we are using filter to get only those array elements who doesn't matches with clicked item
    // => item succesfully gets deleted

    // (below is typical functional programming)
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
      <div className="form">
        <input type="text" value={inputText} onChange={handleChnage} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* NOTE:
              we know, when we map through array, it should have a unique key (we'll use this key
              to delete that particular item we want to delete), we are using 'index',
              but React advises not to use index and instead use some other unique values,
               eg: uuid npm  package 
          
               But, here we'll use index to make it easy to undersatnd */}

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
