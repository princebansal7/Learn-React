import React from "react";
import ReactDOM from "react-dom/client";
import animals, { useAnimals } from "./data";
import cars from "./practice";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*=========Unserstanding ES6 Destructuring====================

console.log(animals); // animals array have two objects

// 1. Destructuring Array (& getting both array elements)-----------------------------------------

const [cat, dog] = animals;
from animals array: 1st element being assigned name 'cat'
                    2nd element being assigned name 'dog'  => we got hold of objects individually

console.log(cat);
console.log(dog);

During destructing, names should be unique otherwise will give error (like 'cat', 'dog' is treated as variables so
shouldn't match with others in program)

const [cat, dog] = animals; // it is same as:
var cat = animals[0];
var dog = animals[1];

// 2. Destructing Objects----------------------------------------------------------------------------

// We previously got cat, dog as objects after destructuring

// Way-1 (Giving same name as object key)

// as we are destructuring object => use curley braces

const { name, sound } = cat; // from cat object we got it's both properties in variables 'name' and 'sound'

// => now 'name' is same as 'cat.name'
//    and 'sound' is same as 'cat.sound'
console.log(name);
console.log(sound); // without destructuring, we would've done like: animals[0].sound; (bad practice)

// NOTE: There is difference b/w destructuing Objects and Array
// In Array :
// const [any_name,....]
// In Objects:
// const [name_same_as_Object_key,.....]
eg: we know
    const cat: {
      name: string;         ===>   const { name, sound } = cat; (name, sound as same key of obeject otherwise gives 'undefined' value)
      sound: string;
   }

// Way-2 (Giving different name from object key)

const { name: catName, sound: catSound } = cat; // following the syntax, we can give any name now
console.log(catName);
console.log(catSound);
const { name: dogName, sound: dogSound } = dog;
console.log(dogName);
console.log(dogSound);

// Providing default value:

const { name = "lion", sound = "roar" } = cat;
right now 'cat' object have:
// const cat: {
//     name: string;
//     sound: string;
// }

console.log(name); // cat
console.log(sound); // meow

// but if 'cat' is like:
// const cat: {
//     sound: string;
// }
console.log(name); // lion => will take default value
console.log(sound); // meow

// case: (Nested Object destructuring)

// let our object is:
// const animals = [
//   {
//     name: "cat",
//     sound: "meow",
//     feedingRequirement: {
//       food: 3,
//       water: 4,
//     },
//   },
//   {
//     name: "dog",
//     sound: "woof",
//     feedingRequirement: {
//       food: 2,
//       water: 3,
//     },
//   },
// ];
// => cat object have nested object feedingRequirements, same goes for dog object

const { name, sound, feedingRequirement } = cat;

console.log(feedingRequirement); // we gets the object 'feedingRequirement'

// usual way to access object properties

console.log(feedingRequirement.food);
console.log(feedingRequirement.water);

// Nested Destructuring:

const {
  name,
  sound,
  feedingRequirement: { food, water },
} = cat;

// What's happened up there ? Explaination:
// we 1st already destructured 'cat' object from animals array
// now, we 1st destructured 'cat' object's nested object as 'feedingRequirement'
// then, further destructured it's properties in 'food' and 'water'

console.log(food);
console.log(water);

// NOTE: we can destructure particilar properties only too if we want
eg: const {feedingRequirement: { food, water } } = cat;


//----- Learning how to set state and how useState() works: (implementation in data.js)-----------------

const [cat, dog] = animals;

// we know useAnimals() will return array => can destructure it

const [animalName, makeSoundFxn] = useAnimals(cat); // useAnimals() is in data.js
console.log(animalName); // cat
makeSoundFxn(); // meaow

*/




//==========================================================================================================

// CHALLENGE: Make sure without changing the code the car stats rendered correctly (Done)

console.log(cars);

const [honda,tesla] = cars; // getting array object elements as 'honda', 'tesla' object

// now, 'honda' , 'tesla' have diffrent properties as nested array and objects
console.log(honda);
console.log(tesla);

// further destructuring 'honda', 'tesla' object

const { speedStats:{ topSpeed:hondaTopSpeed, zeroToSixty} } = honda; // we renamed the nested property as per code requirement
const { speedStats:{ topSpeed:teslaTopSpeed} } = tesla;

// similarly destructuring nested color array in 'honda', 'tesla' objects

const {coloursByPopularity: [hondaTopColour]} = honda;  // from honda object we accessed 'colorsByPopularity' array propert, then by destructuring 1st value accessed and renamed as per code

const {coloursByPopularity: [teslaTopColour]} = tesla;



// Below code shouldn't change


root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
