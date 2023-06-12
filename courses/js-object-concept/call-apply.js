const kibria = {
  id: 101,
  money: 5000,
  name: `Rj Kibria`,
  treatDey: function (expense, boksis, tax) {
    this.money = this.money - expense - boksis - tax;
    console.log(this);
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: `Hero Balam`,
};

const normalGolam = {
  id: 102,
  money: 8000,
  name: `normal Golam`,
};

// call
// kibria.treatDey.call(heroBalam, 500, 100, 50);
// kibria.treatDey.call(heroBalam, 300, 50, 30);

kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

kibria.treatDey.apply(normalGolam, [700, 100, 70]);
