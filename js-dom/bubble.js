document
  .getElementById("second-item")
  .addEventListener("click", function (event) {
    console.log("second item clicked");
    event.stopPropagation();
  });
// ul
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("ul clicked");
  });

// section
document
  .getElementById("section-container")
  .addEventListener("click", function () {
    console.log("section clicked");
  });
