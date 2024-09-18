function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

// Set the number of missions and vacation days.
let missions = 20;
let vacationDays = 0;

// Run the operation until the number of missions is 0.
while (missions > 0) {
  try {
    mysteryOperation();

    vacationDays += 13;
    console.log("You have earned 13 vacation days.");
  } catch (error) {
    console.error(error.message);
    console.error(error.stack);
    console.error(error.name);
    vacationDays += 1;
    console.log("You have earned 1 vacation day.");
  } finally {
    console.log(
      "The operation is completed. /n You have " +
        vacationDays +
        " vacation days."
    );
  }
  missions--;
}
