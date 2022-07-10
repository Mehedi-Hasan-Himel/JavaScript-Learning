// Map string array, array of objects map, foreach. 

const friends = [`Tom Haks`, `Tom Cruise`, `Tom Brady`, `Tom Solaiman`];

const fLengths = friends.map((friend) => friend.length);

// console.log(fLengths);

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

const productNames = products.map((product) => product.name);

console.log(productNames);

const productPrices = products.map((product) => product.price);

console.log(productPrices);

products.map((product) => console.log(product));

products.forEach((product) => console.log(product));
