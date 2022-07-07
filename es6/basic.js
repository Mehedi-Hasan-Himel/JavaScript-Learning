// variable
var deposit = 400;

// condition

if (deposit > 500) {
}

if (deposit < 200) {
} else if (deposit == 500) {
} else if (deposit != 500) {
} else if (deposit >= 500) {
} else {
}

// array
const numbers = [45, 555, 33, 222, 333];
const numberCount = numbers.length;
numbers.push(111);
numbers[2] = 555;

if (numbers.indexOf(222) != -1) {
}
if (numbers.includes(222)) {
}

// loop
// while, for
for (const number of numbers) {
}

// function
function fullName(first, second) {
  const name = first + " " + second;
}

fullName("Rahim", "Ali");

// object
const bottle = {
  color: "red",
  contain: "water",
};
