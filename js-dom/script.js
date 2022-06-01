/* console.log(document.head)
 
let lastItem = document.querySelector(".item:nth-child(1 )");

lastItem.style.color = 'red';

const grandParent = document.querySelector(".todo-list");
const parent = grandParent.children;
const children = parent[1].children;

console.log(children);


const children = document.querySelector(".item");

const parent = children.parentElement;

const grandParent = children.closest(".todo-list").previousElementSibling;

console.log(grandParent);

*/

// creating an element

const divElement = document.createElement("div");

divElement.className = "red";

divElement.setAttribute("id", "red");

divElement.setAttribute("title", "Red Div");

const container = document.querySelector(".todo-list");

const h2Element = container.querySelector("h2");

container.insertBefore(divElement, h2Element);
