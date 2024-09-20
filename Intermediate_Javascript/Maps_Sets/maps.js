// new map
// maps are great for getting the size of an object
// maps are also ordered
// maps are iterable
// maps are dynamic
// maps are faster than objects

const myMap = new Map();


// add elements to the set
myMap.set("name", "Dave");
myMap.set("age", 52);
myMap.set("isMarried", true);

console.log(myMap);

myMap.get("name");
myMap.get("age");
myMap.get("isMarried");

// get elements from the map
console.log(myMap.get("name"));

const add = (a, b) => x + y;
const multiply = (a, b) => x * y;
const divide = (a, b) => x / y;
const subtract = (a, b) => x - y;

const operations = new Map();

operations.set("add", 0);
operations.set("multiply", multiply);
operations.set("divide", divide);
operations.set("subtract", subtract);

console.log(operations);

// turn the map into an array
console.log(Array.from(operations));

// turn the map into an array of arrays
console.log(Array.from(operations.entries()));

// turn the array of arrays into a map
console.log(new Map(Array.from(operations.entries())));

// turn the map into an array of keys
console.log(Array.from(operations.keys()));

// turn the map into an array of values
console.log(Array.from(operations.values()));

// check if the map has a key
console.log(operations.has("add"));

// check if the map has a value
console.log(operations.has(add));

//add multiple elements to the map in one expression
const newMap = new Map([
  ["name", "Dave"],
  ["age", 52],
  ["isMarried", true],
]);

console.log(newMap);

//empty the map
newMap.clear();

console.log(newMap);

//get the size of the map
// returns how many elements are in the map
console.log(operations.size);

// get all keys of the map
console.log(operations.keys());

// get all values of the map
console.log(operations.values());

// get all entries of the map
console.log(operations.entries());

// iterate over the map
for (const [key, value] of operations) {
  console.log(`${key}: ${value}`);
}

// iterate over the map using forEach
operations.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// iterate over the map using for of
// for of returns an array of arrays
// using destructuring to get the key and value
for (const [key, value] of operations) {
  console.log(`${key}: ${value}`);
}

// return a single array of the map
for (x of operations.values()) {
  console.log(x);
}

// return a single array of the map
for (x of operations.keys()) {
  console.log(x);
}
