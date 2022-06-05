function makeRed() {
  document.body.style.backgroundColor = `Red`;
}

function makeYellow() {
  document.body.style.backgroundColor = `Yellow`;
}

const blueButton = document.getElementById("make-blue-button");

blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = `Blue`;
}

const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

// handel using by addEventListener
const goldenButton = document.getElementById("make-goldenRod");
goldenButton.addEventListener("click", makeGoldenRod);
function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}
