// Array having two objects
// where each object is having 2 key-values: name,sound

const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirement: {
      food: 3,
      water: 4,
    },
  },
  {
    name: "dog",
    sound: "woof",
    feedingRequirement: {
      food: 2,
      water: 3,
    },
  },
];

//----- learning setState()-----------

function useAnimals(animalObj) {
  return [
    animalObj.name,
    function () {
      console.log(animalObj.sound);
    },
  ];
}

export default animals;
export { useAnimals };
