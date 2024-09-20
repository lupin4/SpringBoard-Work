// traditional function definition

function makeAlert(message) {
  alert(message);
}

// function expression
// function expressions are stored in a variable

const whisper = function (message) {
  console.log(message.toLowerCase());
};

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}
function modulus(a, b) {
  return a % b;
}

function average(a, b) {
  return (a + b) / 2;
}

function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

function exponential(a, b) {
  return Math.pow(a, b);
}
//array of functions

const mathFunctions = [
  add,
  subtract,
  multiply,
  divide,
  power,
  modulus,
  average,
  max,
  min,
  exponential,
];

function doMath(a, b, mathFunction) {
  console.log(mathFunction(a, b));
  return mathFunction(a, b);
}

doMath(10, 5, add);
doMath(10, 5, subtract);
doMath(10, 5, multiply);
doMath(10, 5, divide);

//passing in an anonymous function that is defined in the argument of another function

doMath(10, 5, function (a, b) {
  console.log(a ** b);
  return a ** b;
});

function doAllMath(a, b) {
  for (let func of mathFunctions) {
    console.log(func(a, b));
  }
}

doAllMath(10, 5);
