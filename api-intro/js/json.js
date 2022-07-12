// Intro To Json, Json Structure, Parse, Stringify
// JavaScript Object.
const user = {
  id: 11,
  name: `Monirruzzaman Monir`,
  job: `Wordpress Developer`,
};

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
  name: `Alia Store`,
  address: `Ranbir Road`,
  profit: 1500,
  products: [`laptop`, `Mobile`, `Pepsi`],
  owner: {
    name: `Alia Bhat`,
    profession: `Actor`,
  },
  isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);

console.log(converted);
