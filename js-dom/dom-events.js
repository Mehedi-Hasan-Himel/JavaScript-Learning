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

