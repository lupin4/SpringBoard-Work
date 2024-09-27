document.addEventListener("DOMContentLoaded", function () {
  const clickButton = document.getElementById("click-button");
  const colorButton = document.getElementById("color-button");


  let clickCount = 0;
  let isMouseCoordsEnabled = false; // Toggle for mouse coordinates

  clickButton.addEventListener("click", handleClick);
  colorButton.addEventListener("click", changeColor);

  function handleClick() {
    document.getElementById("click-output").textContent = "Button Clicked!";
    timeOut(3);
  }

  function changeColor() {
    document.body.style.backgroundColor = "teal";
    resetColor(3);
  }

  function timeOut(time) {
    time = time * 1000;
    setTimeout(function () {
      document.getElementById("click-output").textContent =
        "Go on, click me again! You know you want to!";
    }, time);
    setTimeout(function () {
      document.getElementById("click-output").textContent = "";
    }, time * 2);
  }

  function resetColor(time) {
    time = time * 1000;
    setTimeout(function () {
      document.body.style.backgroundColor = "beige";
    }, time);
  }

  // Selectors
  const eventObjectButton = document.getElementById("event-object-button");
  const p = document.querySelector("p");
  const p2 = document.querySelectorAll("p");

  // Add event listeners to individual <p> elements
  p2.forEach((pElement) => {
    pElement.addEventListener("click", () => {
      console.log(`${pElement.textContent} was clicked`);
    });
  });

  // Common event listeners on first <p>
  p.addEventListener("mouseover", () => {
    console.log("p was hovered");
  });

  p.addEventListener("mouseout", () => {
    console.log("p was unhovered");
  });

  // Mouse coordinates toggle
  document.addEventListener("mousemove", (event) => {
    if (isMouseCoordsEnabled) {
      const x = event.clientX;
      const y = event.clientY;
      document.getElementById("mouse-coords").textContent = `X: ${x}, Y: ${y}`;
    }
  });

  // Toggle button to enable/disable mouse coordinates
  document.getElementById("toggle-coords").addEventListener("click", () => {
    isMouseCoordsEnabled = !isMouseCoordsEnabled;
    document.getElementById("mouse-coords").textContent = isMouseCoordsEnabled
      ? "Mouse coordinates enabled."
      : "Mouse coordinates disabled.";
  });
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);
});


