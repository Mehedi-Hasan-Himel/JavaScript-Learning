// Implement filter, find on an array of objects

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter((number) => number > 20);

const smallNumbers = numbers.filter((number) => number < 10);

// console.log(smallNumbers);
// console.log(bigNumbers);

const products = [
  {
    name: `Water Bottle`,
    price: 50,
    color: `Yellow`,
  },
  {
    name: `Mobile Phone`,
    price: 15000,
    color: `Black`,
  },
  {
    name: `Smart Watch`,
    price: 3000,
    color: `Black`,
  },
  {
    name: `Sticky Notes`,
    price: 30,
    color: `Pink`,
  },
  {
    name: `Water Glass`,
    price: 30,
    color: `White`,
  },
];

const expensive = products.filter((products) => products.price > 100);

// console.log(expensive);

const blacks = products.filter((products) => products.color == `Black`);

// console.log(blacks);

const whiteItem = products.find((products) => products.color == `Pink`);

console.log(whiteItem);
