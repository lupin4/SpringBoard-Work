import { getNumberFact } from "./numberFacts.js";

const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const number = document.querySelector(".number");
const numberFact = document.querySelector(".numberFact");
const fact1 = document.querySelector(".fact1");
const fact2 = document.querySelector(".fact2");
const fact3 = document.querySelector(".fact3");
const fact4 = document.querySelector(".fact4");

submitBtn.addEventListener("click", () => {
  const numberValue = numberInput.value;
  number.textContent = numberValue;

  getNumberFact(numberValue)
    .then((facts) => {
      // Clear existing content
      numberFact.textContent = "";

      // Create and append new elements for each fact
      facts.forEach((fact) => {
        const factElement = document.createElement("div");
        factElement.textContent = fact;
        factElement.classList.add("fact");
        numberFact.appendChild(factElement);
      });

      numberFact.classList.add("active");
    })
    .catch((error) => {
      console.error("Error fetching number fact:", error);
    });
});
