let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// forEach is a callback method that takes a function as an argument
// and runs it for each element in the array
colors.forEach(function (color) {
  console.log(color);
});

//forEach takes 3 arguments: the element, the index, and the array
//the entire array isn't commonly used
// this function demonstrates the arguments passed into forEach
// name is the array value, i is the index, arr is the entire array
function yell(name, i, arr) {
  const yell = name.toUpperCase();
  console.log(`At index ${i}, ${yell} on ${arr}`);
}

//the function is then passed in as an argument to the forEach method
//since yell takes 3 arguments, the forEach method passes in the 3 arguments
//the first argument is the value, the second is the index, and the third is the array
colors.forEach(yell);

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

//calculate the total price of all items in the array
let total = 0;
prices.forEach(function (price) {
  total += price;
});

console.log(total);
//forEach isn't used as much since we can use for...of loops or for...in loops
//forEach is useful when you want to perform an action on each element in an array
//and you don't need access to the index or the array


// this is a custom forEach function that takes an array and a callback as arguments
// it then loops through the array and calls the callback function for each element
// the callback function is called with the element, the index, and the array as arguments
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEach(colors, yell);
