//  Destructuring Object to extract values to variables

const fish = {
  id: 58,
  name: `King Hilsah`,
  price: 9000,
  phone: `+8801969038472`,
  address: `Chadpur`,
  dress: `Silver`,
};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

console.log(phone, price, dress, id);

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
      third: `JS`,
    },
  },
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.CEO;
const { second, third } = company.web.tech;
console.log(work, framework, food);
