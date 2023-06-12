// Class, constructor, method, create object from class
class Support {
  name;
  roll = `Support Web Dev`;
  address = `BD`;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, `Start a support session. `);
  }
}

const amir = new Support(`Amir Khan`, `India`);
const salman = new Support(`Salman Khan`, `Dubai`);
const srk = new Support(`SRK Khan`, `Nepal `);
console.log(amir, salman, srk);

