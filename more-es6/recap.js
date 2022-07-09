// 01. let , const
const hubby = "Omor Sani";
// const phone = `iPhone14` // TypeError: Assignment to constant variable.
let phone = `iPhone14`;
phone = `Samsung Galaxy S17`;

// 02. Default perimeter.
// 05. spread or three dots. (...)
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);

// 03. template string.
const myNotes = `I'm mojnu of ${hubby}. I have a ${phone}.`;
console.log(myNotes);

// 04. Arrow function.
const square = (x) => x * x;
console.log(square(8));
