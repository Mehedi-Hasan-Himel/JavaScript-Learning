const products = [
  `Dell core i9 512GB laptop`,
  `iPhone 1TB Camera phone.`,
  `Yellow laptop with camera`,
  `Lenovo laptop`,
  `LG super nova laptop`,
  `HTC low budget phone`,
  `dell Purple color phone with Laptop`,
];

const searching = `dell`;
// indexOf
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    //  output.push(product);
  }
}

// console.log(output);

for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    // output.push(product)
  }
}

console.log(output);

// starts with
for (const product of products) {
   if (product.toLowerCase().startsWith(searching.toLowerCase())) {
     output.push(product)
  }
}
