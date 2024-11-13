document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const boxContainer = document.getElementById("box-container");
  const newBoxButton = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  // Initialize variables for box color and ID counter
  let boxColor = "black"; // Default color
  let boxCounter = 1;

  // Function to add a new box
  function addBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = boxCounter; // Display the box ID
    box.setAttribute("data-id", boxCounter); // Store ID in a data attribute
    box.style.backgroundColor = boxColor; // Set the color from the current selected color
    box.style.width = "100px"; // Set width for visual purposes
    box.style.height = "100px"; // Set height for visual purposes

    boxContainer.appendChild(box); // Add the box to the container
    boxCounter++; // Increment the counter for the next box
  }

  // Event listener for form submission (set box color)
  colorForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const newColor = colorInput.value;
    if (newColor) {
      boxColor = newColor; // Update the global box color variable

      // Change color of all existing boxes
      const allBoxes = document.querySelectorAll(".box");
      allBoxes.forEach((box) => {
        box.style.backgroundColor = boxColor;
      });

      // Clear the input field after setting the color
      colorInput.value = "";
    }
  });

  // Event listener for adding a new box when the button is clicked
  newBoxButton.addEventListener("click", addBox);

  // Event listener for adding a new box when the "N" key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "N" || e.key === "n") {
      if (document.activeElement !== colorInput) {
        addBox();
      }
    }
  });

  // Event listener for removing a box when double-clicked
  document.addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("box")) {
      e.target.remove(); // Remove the box
    }
  });

  // Event listener for displaying coordinates when hovered over a box
  document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
      const x = e.pageX;
      const y = e.pageY;
      e.target.textContent = `X: ${x}, Y: ${y}`; // Display the coordinates
    }
  });

  // Event listener for displaying box ID back when the mouse leaves
  document.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("box")) {
      const boxID = e.target.getAttribute("data-id");
      e.target.textContent = boxID; // Restore the box ID when mouse leaves
    }
  });
});
