//========= Learning Looping using various methods==================
// PS: To learn these ES6 Array helper methods, check out 'Web-Dev-Basics' Repository on my GitHub
/*------------------------------

var numbers = [3, 56, 2, 48, 5];
# using forEach()

WAY-1:

let newNum = [];
function double1(val) {
  newNum.push(val * 2);
}
numbers.forEach(double1);
console.log(newNum);


WAY-2:

let newNum = [];
numbers.forEach(function (val) {
  newNum.push(val * 2);
});
console.log(newNum);

---------------------------------------*/

//##===== REACT============================

/*------------------------------------------------------------------------------
1.using Map - it Create a new array while performing some logic with each item in an array.
// benefit of using map instead of foreach is, map itself returns the value

numbers = [3, 56, 2, 48, 5];

WAY-1: (function declaration)

function double2(val) {
    return val * 2;
}
const newNum = numbers.map(double2);
console.log(newNum);

WAY-2: (function expressions / Anonymous Function)

const newNum = numbers.map(function (val) {
    return val * 2;
});
console.log(newNum);


WAY-3: (Arrow Fucntions)

const newNum = numbers.map((val) => val * 2);
console.log(newNum);

--------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------

2.Filter - It Create a new array by only keeping those items that return 'true' for applied logic.

numbers = [3, 56, 2, 48, 5];

WAY-1:

function isEven(x) {
  if (x % 2 === 0) return true;
  return false;
}
const newNum = numbers.filter(isEven); // filter only kept items in the new array which returned true
console.log(newNum);

WAY-2:

const newNum = numbers.filter(function (x) {
    if (x % 2 === 0) return true;
    return false;
});
console.log(newNum);


----------------------------------------------------------*/

/*
 3.Reduce - it Accumulate a value by doing something to each item in an array.

 numbers = [3, 56, 2, 48, 5];
 
 // WAY-1 (the usual way using JS forEach())


 let sum = 0;
const newNum = numbers.forEach(function (x) {
  sum += x;
});
console.log(sum);


WAY-2:

numbers = [3, 56, 2, 48, 5];
const newNum = numbers.reduce(function (sum, x) {
    return sum + x;
});
console.log(newNum);

*/

/* ===========Newer methods====================================

// 4.Find - it find the first item that matches from an array.

numbers = [3, 12, 2, 30, 32, 35, 48, 5];

console.log(numbers);

// find() stops as soon as it finds the 1st item with matching condition

const ans = numbers.find(function (x) {
  if (x % 2 == 0) return x;
});

console.log(ans);

const ans2 = numbers.find(function (x) {
  return x > 30;
});

console.log(ans2);

// 5.FindIndex - it works similar to find but it find the index of the first item that matches.

const ans3 = numbers.findIndex(function (x) {
  if (x % 2 == 0) return x;
});

console.log(ans3);

const ans4 = numbers.findIndex(function (x) {
  return x > 30;
});

console.log(ans4);

*/

//=======Challenge based on above learning =========================

// GOAL: put 'meaning' from emojipedia array to some new array (having only 100 characters at max)

import Emoji from "./emojipedia.js";

// console.log(Emoji);

const newMeaning = Emoji.map(function (SingleObj) {
    return SingleObj.meaning.substring(0, 100);
});

console.log(newMeaning);
