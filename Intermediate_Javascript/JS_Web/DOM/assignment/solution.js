// Task 1
let task1 = document.getElementById("task1");
task1.innerText = "Hello World from innerText";

// Task 2
let task2 = document.getElementById("task2");
let newButton = document.createElement("button");

newButton.innerHTML = "Submit";

task2.appendChild(newButton);

// Task 3
document.body.style.backgroundColor = "#232323";

// Task 4
let items = document.getElementsByClassName("item");
console.log(items);
for (let i = 0; i < items.length; i++) {
  items[i].style.border = "1px solid red";
}

// Task 5

let task5 = document.getElementById("task5");
task5.href = "https://www.springboard.com/";

// Task 6
let task6 = document.getElementById("task6");
task6.value = "DOM Master";

// Task 7
let task7 = document.getElementById("task7");
task7.classList.add("new-class");

// Task 8
let task8 = document.getElementById("task8");
let newButton = document.createElement("button");
newButton.innerHTML = "Submit";
task8.appendChild(newButton);

// Task 9
let task9 = document.getElementById("task9");
task9.remove();
