const bottle = {
  color: `yellow`,
  hold: `water`,
  price: 50,
  isCleaned: true,
};

// getting all properties name.
const keys = Object.keys(bottle)
// console.log(keys);

// getting all values name.
const values = Object.values(bottle)
// console.log(values);

const pairs = Object.entries(bottle) 
// console.log(pairs);

// Object.seal(bottle)
Object.freeze(bottle)
bottle.price = 100
bottle.height = 16
delete bottle.isCleaned;
console.log(bottle);