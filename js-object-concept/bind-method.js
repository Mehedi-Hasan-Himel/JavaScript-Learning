const kibria = {
  id: 101,
  money: 5000,
  name: `Rj Kibria`,
  treatDey: function (expense) {
     this.money = this.money - expense;
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

// kibria.treatDey(100);


const heroTreatDey = kibria.treatDey.bind(heroBalam)
heroTreatDey(500)
heroTreatDey(300)

const normalTreatDey = kibria.treatDey.bind(normalGolam)
normalTreatDey(2000)