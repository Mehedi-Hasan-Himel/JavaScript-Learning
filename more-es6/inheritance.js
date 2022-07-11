// Inheritance, extends class, super, class method
class TeamMember {
  name;
  roll = `Support Web Dev`;
  address = `BD`;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, `Start a support session. `);
  }
}

class StudentCare extends TeamMember {
  buildARoutine(student) {
    console.log(this.name, `Build a routine for`, student);
  }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, `Release App Version`, version);
  }
}

const Sahin = new Support(`Sahin`, `Rongpur`, 11);
const Monir = new Support(`Monir`, `Taingail`, 4);
const Mominul = new Support(`Mominul`, `Hobigonj`, 9);
const Asif = new StudentCare(`Asif`, `Savar`);
const Himel = new NeptuneDev(`Himel`, `Gazipur`, `VS Code`);

console.log(Sahin, Monir, Mominul, Asif, Himel);
