// some and every are similar to filter and map. they return a boolean value
// some returns true if at least one element in the array satisfies the condition
// every returns true if all elements in the array satisfy the condition

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = someNumbers.some((number) => number % 2 === 0);
// console.log(evenNumbers);

// check if the array is a fibonacci sequence
const isFibonacci = (array) => {
  for (let i = 2; i < array.length; i++) {
    if (array[i] !== array[i - 1] + array[i - 2]) {
      return false;
    }
  }
  return true;
};

// function to filter out numbers from the fibonacci sequence
const filterFibonacci = (array) => {
  return array.filter((number) => isFibonacci(number));
};

console.log(filterFibonacci(someNumbers));

console.log(someNumbers.some(isFibonacci));

const everyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allEvenNumbers = everyNumbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers);

const allOddNumbers = everyNumbers.every((number) => number % 2 !== 0);
console.log(allOddNumbers);

// check if text is all string and not number or symbol
function everyCharIsLetter(str) {
  return (
    typeof str === "string" &&
    str.split("").every((char) => /[a-zA-Z]/.test(char))
  );
}

console.log(everyCharIsLetter("hello"));
console.log(everyCharIsLetter("hello123"));
console.log(everyCharIsLetter("123"));

function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

console.log(
  mySome([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number % 2 === 0)
);
console.log(
  myEvery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number % 2 === 0)
);
