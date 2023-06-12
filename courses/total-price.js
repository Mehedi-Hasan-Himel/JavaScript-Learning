/*
const products = [
  { name: `Laptop`, price: 4300 },
  { name: `Shirt`, price: 5000 },
  { name: `Watch`, price: 3000 },
  { name: `Phone`, price: 43300 },
  { name: `Power bank`, price: 4300 },
];

let totalPrice = 0;
for (const product of products) {
  totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);
*/
const cart = [
  { name: `Laptop`, price: 4300, quantity: 1 },
  { name: `Shirt`, price: 5000, quantity: 4 },
  { name: `Watch`, price: 3000, quantity: 1 },
  { name: `Phone`, price: 43300, quantity: 1 },
  { name: `earbuds`, price: 4300, quantity: 2 },
];

let cartTotal = 0;

for (const product of cart) {
  console.log(product);
  const productTotal = product.price * product.quantity;
  cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);
