// object enhancement 
// shorthand syntax for assigning object properties to variables

function makePerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    isStudent: true,
  };
}

const person = makePerson("John", "Doe", 20);

console.log(person);

//object methods
// const math = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

// without having to name object methods by using function name as the property name
const math = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};


//destructuring
// extracting values from arrays or objects and assigning them to variables

const character = {
  name: "Aragorn",
  age: 30,
  race: "Human",
  characterClass: "Warrior",
  inventory: ["sword", "shield", "potion"],
  stats: {

    strength: 10,
    dexterity: 10,
    intelligence: 10,
  },
  


};

// destructuring object
const { name, age, race, characterClass, inventory, stats } = character;

console.log(name, age, race, characterClass, inventory, stats);
// destructuring nested object 
const { strength, dexterity, intelligence } = stats;
// with rest operator
const character2 = {
  name2: "Legolas",
  age: 20,
  race: "Elf",
  characterClass: "Archer",
  inventory: ["bow", "arrow", "potion"],
  stats: {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
  }
}
// here the rest operator is used to collect the remaining properties of the object into a new object
const { name2, ...rest } = character2;


// computed property names
const key = "name";
const value = "Aragorn";

const obj = {
  [key]: value,
};

console.log(obj);
// computed property names can also be used to create object methods
const methodName = "getName";
const methodValue = function () {
  return "Aragorn";
};

const obj2 = {
  [methodName]: methodValue,
};



























