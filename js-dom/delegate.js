// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     document.getElementById("item-container").removeChild(item);
//     console.log(event.target);
//   });
// }

document.getElementById("add-item").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "Brand New Item";
  li.classList.add("item");
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
});

document
  .getElementById("item-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target)
  });
