import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/*
//---------------------------Here we'll learn about "ES6 Spread operator (...)"---------------------------------------------

//======= Spread operator with Array:==============================================================

const sourFruits = ["lemon", "orange", "AaluBukhara"];

// const fruits = ["Banana", "Apple", "Cheeku"];

// Now Let's say we want to add all of the contents of sourFruits array in fruits array at the end.
// one way is individually pushing the array elements in required array
// another better way is:
// Using ES6 spread Operator:  "..."
// eg:  [1,2,3, ...ArrayName]
// These three dots are spread operator followed by array name which you want to expand in required array
// eg:

// const fruits = ["Banana", "Apple", "Cheeku", ...sourFruits];
// console.log(fruits);

// So, what this spread operator does is, it took the sourFruits array and Expands it or spread it
// to individual items, and adds those individual items to that specified position in the required
// array where we added spread operator

// => we can change positions too. (check outputs on console after uncommenting)

//eg1:
// const fruits = ["Banana", "Apple", ...sourFruits, "Cheeku"];
// console.log(fruits);

// eg2:
// const fruits = ["Banana", ...sourFruits, "Apple", "Cheeku"];
// console.log(fruits);

//eg3:
const fruits = [...sourFruits, "Banana", "Apple", "Cheeku", ...sourFruits];
console.log(fruits);

// ===== Spread operator with Objects==========================================================

// const fullName = {
//   fName: "Prince",
//   lName: "Bansal",
// };

// const student = {
//   roll: 20223069,
// };
// console.log(fullName);
// console.log(student); // Student is incomplete without full name, let's add with the help of spread operator

const fullName = {
  fName: "Prince",
  lName: "Bansal",
};

const student = {
  ...fullName,
  roll: 20223069,
};
console.log(student);

// Notice, using spread is good as it makes fullName properties as student properties without inserting the whole
// object itself => it's different from Doing like:

const student2 = {
  fullName, // Here we added the whole object as property => as nested objects
  roll: 20223069,
};
console.log(student2);

// We'll use above concepts about spread operator in App.jsx to shorten our code

*/
