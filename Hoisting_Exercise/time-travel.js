/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(travelDate);
// travelDate = "2024-03-16";
// console.log(travelDate);
/**
 * Observations:
 * TODO: Explain here.
 * TypeError: Assignment to constant variable.
 * A type error is thrown since a constant variable cannot be reassigned.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel);

var timeMachineModel = "T-800";
console.log(timeMachineModel);
/**
 * Observations:
 * TODO: Explain here.
 * because the variable is scanned by the engine upon file execution, the variable declared with var is
 * hoisted to global scope and set to undefined until the code encounters the declaration. thats why the engine is aware of its existence in the first log
 */
