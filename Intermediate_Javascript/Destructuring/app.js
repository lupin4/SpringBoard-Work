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


// and object can have a property changed with destructuring
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x, y);

// and an object can have a property changed with destructuring
const person2 = {
  name: "Tom",
  age: 20,
};

const { name: firstName, age: yearsOld } = person;

console.log(firstName, yearsOld);

// properties can also have default values
const person3 = {
  name: "Jerry",
  age: 20,
};

const { name: studentName, age: ageValue, isStudent = true } = person3;

console.log(firstName, yearsOld, isStudent);

// destructuring arrays can be used to access elements of an array
const fruits = ["apple", "banana", "orange", "grape"];

const [firstFruit, secondFruit, ...restOfFruits] = fruits;

console.log(firstFruit, secondFruit, restOfFruits); 

// destructuring arrays can also have default values
const numbers = [1, 2, 3, 4, 5];

const [firstNumber, secondNumber, thirdNumber, fourthNumber = 10, fifthNumber = 10] = numbers;

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);


// destructuring in arrays its only the position of the variables in the array
// it does not matter what the variable name is, it will always be the position in the array




// destructuring in functions
// objects passed as parameters to a function can be destructured

function makeUser({ name, age, isActive }) {
  return `Name: ${name}, Age: ${age}, Is Active: ${isActive}`;
}

const user = {
  name: "John",
  age: 20,
  isActive: true,
};

console.log(makeUser(user));

// arrays passed as parameters to a function can be destructured

function getFirstAndLast([first, ...rest], last) {
  return [first, last];
}

const numbers2 = [1, 2, 3, 4, 5];

console.log(getFirstAndLast(numbers2, 5));

// default values can be used to assign a value to a parameter if the value is not passed

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());


// extracting nested values
// nested objects can be destructured by using the same syntax as object literals


const movies = {
  title: "The Matrix",
  director: "The Wachowskis",
  releaseYear: 1999,
  genre: "Science Fiction",
  cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  Rated: {
    advisory: "PG-13",
  },
  Released: {
    USA: 1999,
    UK: 2000,
  },
  Ratings: [
    { imdb: 8.7, url: "https://www.imdb.com/title/tt0133093/" },
    { rottentomatoes: 90, url: "https://www.rottentomatoes.com/m/the_matrix" },
    { metacritic: 88, url: "https://www.metacritic.com/movie/the-matrix" },
  ],
  Runtime: "2h 16min",
  Language: "English",
  Subtitles: "English",
  Color: "Color",
  Budget: "$100,000,000",
  BoxOffice: "$292,000,000",
  Production: "Warner Bros. Pictures",
  Distributor: "Warner Bros. Pictures",
  Country: "USA",
  Language: "English",
  Subtitles: "English",
  Color: "Color",
};

const {
  title,
  director,
  releaseYear,
  genre,
  cast,
  Rated: { advisory },
} = movies;

console.log(title, director, releaseYear, genre, cast, advisory);

// extracting nested values from arrays
// with destructuring we simply nest the curly braces to access the nested values
const movieRated = { ratings: { advisory: "PG-13" } };

// we can reassign properties to new names
const {
  ratings: { advisory: ratingAdvisory },
} = movieRated;

console.log(ratingAdvisory);

// destructuring is used in reassigning values to variables

let happy = "sad";
let sad = "happy";

// here we are reassigning the values of happy and sad to each other in one line
// destructuring is used to assign the values of the array to
// the variables in the order they are passed in
// this uses the destructuring array syntax to reassign the values of happy and sad to each other
[happy, sad] = [sad, happy];

console.log(happy, sad);

// destructuring can be used to reorder variables in an array
//
// we can also destructure arrays in functions

let prices = [9.99, 1.5, 19.99, 49.99, 99.99];

let [first, second, third, fourth, fifth] = prices;

// now we can reorder the variables in the array

[first, second, third, fourth, fifth] = [fifth, fourth, third, second, first];
let newPrices = [second, third, fourth, fifth, first];
console.log(newPrices);

function getFirstAndLast([first, ...rest], last) {
  return [first, last];
}

const numbers3 = [1, 2, 3, 4, 5];

console.log(getFirstAndLast(numbers3, 5));

// skipping values in an array
const skippingStones = [1, 2, 3, 4, 5, 6];
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.
let [firstSkippingStone, , , , , sixthSkippingStone] = skippingStones;
console.log(firstSkippingStone, sixthSkippingStone);








































