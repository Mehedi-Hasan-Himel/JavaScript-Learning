// select element & assign them to variables.
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkbox.type = "checkbox";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
};
