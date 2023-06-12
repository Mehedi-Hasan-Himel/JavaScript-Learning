// declare variable based on the name of an object properties.

const myObject = {
  x: 2,
  y: 50,
  z: 600,
  a: 25,
  b: 68,
};

// console.log(`myObject.p`, myObject?.p?.q);

const { x, b } = myObject;
// console.log(b);

// destructuring array
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = [`Aliya`, `Jeneliya`];

// console.log(best,faltu);
const {} = { sky: `blue`, soil: `matti`, color: `red`, money: `500` };

// chaining

const company = {
  name: `GP`,
  CEO: { id: 1, name: `Ahmol`, food: `Fuska` },
  web: {
    work: `Website Development`,
    employee: 22,
    framework: `react`,
    tech: {
      first: `HTML`,
      second: `CSS`,
      third: `JavaScript`,
    },
  },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);
