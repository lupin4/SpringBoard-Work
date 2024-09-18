/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
let activateHyperDrive = () => {
  console.log("HyperDrive Activated!");
};
activateHyperDrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
let scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
let currentCoordinates = () => ({ x: 10, y: 20, z: 30 });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
let spacecraft = {
  receiveMessage: (message) => {
    console.log(`Message received: ${message}`);
    // Calling the function from within itself
    spacecraft.receiveMessage("Calling from Hal 3000");
    console.log(this);
  },
};

spacecraft.receiveMessage("Hello from Andromeda");
console.log(spacecraft);

/**
 * Observations:
 * TODO: Explain here.
 * A stack overflow message is displayed in the console.
 * This happens because the `this` keyword inside the `receiveMessage` function refers to the global object (in non-strict mode) or `undefined` (in strict mode).
 * Since the `spacecraft` object is not in the global scope, the `this` value is not what we expect.
 */
