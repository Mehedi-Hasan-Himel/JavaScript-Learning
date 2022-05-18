const phones = [
  { name: `Samsung s23 Ultra`, price: 80000, camera: 200, storage: 512 },
  { name: `iphone`, price: 180000, camera: 12, storage: 512 },
  { name: `Redmi`, price: 8000, camera: 20, storage: 1282 },
  { name: `Nokia`, price: 3000, camera: 1.8, storage: 0 },
  { name: `Realme`, price: 28000, camera: 108, storage: 256 },
  { name: `Oppo`, price: 23000, camera: 16, storage: 64 },
];

let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
