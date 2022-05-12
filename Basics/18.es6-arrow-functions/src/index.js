import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//=============CONVERTING BELOW functions to Arrow Functions:======================
/* 

var numbers = [3, 56, 2, 48, 5];
// Map -Create a new array by doing something with each item in an array.

Ques:

const newNumbers = numbers.map(function (x) {
  return x * 2;
});

ANS: (making Above functions as Arrow fucntion)

const newNumbers = numbers.map(x=>x*2)




// Filter - Create a new array by keeping the items that return true.

Ques:
const newNumbers = numbers.filter(function(num) {
    return num < 10;
});

ANS: (making Above functions as Arrow fucntion)
const newNumbers = numbers.filter(num => num < 10);



// Reduce - Accumulate a value by doing something to each item in an array.

Ques:

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})

ANS: (making Above functions as Arrow fucntion)

var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)

//Find - find the first item that matches from an array.

QUES:

const newNumber = numbers.find(function (num) {
    return num > 10;
})

ANS: (making Above functions as Arrow fucntion)

const newNumber = numbers.find(num =>num > 10)


//FindIndex - find the index of the first item that matches.

QUES:

const newNumber = numbers.findIndex(function (num) {
    return num > 10;
})

ANS: (making Above functions as Arrow fucntion)

const newNumber = numbers.findIndex(num => num > 10)


*/
