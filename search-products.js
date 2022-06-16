const products = [
  { name: `Samsung S3 Phone`, price: 12000 },
  { name: `Asus laptop`, price: 32000 },
  { name: `Apple Smart Watch`, price: 18000 },
  { name: `Basundhara Buinding Paper`, price: 80 },
  { name: `LG Smart Phone`, price: 10000 },
  { name: `Old Granny Land Phone`, price: 100 },
  { name: `Samsung Watch`, price: 100 },
];

function searchProducts(products, searchText) {
  const matched = [];
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      matched.push(product);
      // console.log(name);
    }
  }
  return matched;
}

const matched = searchProducts(products, `Watch`);
console.log(matched);
