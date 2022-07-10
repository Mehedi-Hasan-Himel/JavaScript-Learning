class Support {
  name;
  roll = `Support Web Dev`;
  address = `BD`;
  constructor(name,address) {
     this.name = name;
     this.address = address;
  }
  startSession() {
    console.log(`Start a support session. `);
  }
}

const amir = new Support(`Amir Khan`, `India`);
const salman = new Support(`Salman Khan`,`Dubai`);
console.log(amir);
console.log(salman);


amir.startSession