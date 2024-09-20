//map is used to create a new array by transforming each element in the original array
//it takes a callback function as an argument and returns a new array
//the callback function is called with the element, the index, and the array as arguments
//the callback function is called for each element in the array
//the callback function returns the new value for the array

const numbers = [1, 2, 3, 4, 5];

const timesFive = numbers.map(function (num) {
  return num * 5;
});

console.log(numbers);
console.log(timesFive);

const toDos = [
  {
    id: 1,
    todo: "study JavaScript",
    isDone: false,
  },
  {
    id: 2,
    todo: "study React",
    isDone: false,
  },
  {
    id: 3,
    todo: "study Node.js",
    isDone: false,
  },
];

const toDosIds = toDos.map(function (todo) {
  return todo.id;
});
const toDoText = toDos.map(function (todo) {
  return todo.todo;
});

console.log(toDosIds);
console.log(toDoText);

const items = document.querySelectorAll("li");

const itemsArray = Array.from(items);

itemsArray.map(function (item) {
  item.style.color = "green";
});


// define a map function that takes an array and a callback function as arguments
// the callback function is called with the element, the index, and the array as arguments
// the callback function returns the new value for the array
// the map function returns the new array

function myMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const names = ["John", "Jane", "Doe", "Smith"];

const namesUpperCase = myMap(names, function (name) {
    return name.toUpperCase();
});

console.log(namesUpperCase);


