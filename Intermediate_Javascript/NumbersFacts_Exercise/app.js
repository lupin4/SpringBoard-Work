import { getNumberFact } from "./numberFacts.js";

const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const number = document.querySelector(".number");
const numberFact = document.querySelector(".numberFact");

submitBtn.addEventListener("click", () => {
    const numberValue = numberInput.value;
    number.textContent = numberValue;
    getNumberFact(numberValue)
        .then(fact => {
            numberFact.textContent = fact;
            numberFact.classList.add("active");
        })
        .catch(error => {
            console.error("Error fetching number fact:", error);
        });
});
