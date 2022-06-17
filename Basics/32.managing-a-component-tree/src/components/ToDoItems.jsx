// 4.
// Now, We will see how to delete items from array instead of just striking them through
// NOTE: As we can pass props, we can also pass functions to our child components
import React from "react";

function ToDoItems(props) {
  return (
    // this way we can't pass id, because here we are calling the function (which immediate calls the
    // functon as it renders) not passing it
    // <div onClick={props.onCheckedDelete(props.id)}>
    //   <li>{props.itemText}</li>
    // </div>

    // to pass the function, we should do like
    // this way function only gets called when onClick is triggered
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.itemText}</li>
    </div>
  );
}
export default ToDoItems;

//1.
// import React from "react";

// function ToDoItems(props) {
//   return <li>{props.itemText}</li>;
// }
// export default ToDoItems;

// above ToDoItem component is stateless component , because
// it's not trying to change istelf or anything else, it's
// just reciveing something and displaying
// -----------------------------------------------------------------------------
//2.

// NOTE: props are read only, we can't modify something with the help of them.
// eg:

// import React from "react";

// function ToDoItems(props) {
//   return
//   <>
//      <div>
//     <input onChange={(check)={
//         props = " do the change "  // won't work  => can't modify the props
//     }} />
//   </div>
//   <li>{props.itemText}</li>;
//   </>

// }
// export default ToDoItems;

//-----------------------------------------------------------------------------------

//3.
// But we can use states inside these components
// here we are sticking the text when clicked

// import React, { useState } from "react";

// function ToDoItems(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.itemText}
//       </li>
//     </div>
//   );
// }
// export default ToDoItems;
