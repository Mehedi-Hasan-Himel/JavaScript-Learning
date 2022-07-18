// 1. using object literal.
const student = { name: `Sakib Al Hasan`, job: `Cricketer` };

// 2. Constructor
const person = new Object();

// 3.

// const human = Object.create(null);
const human = Object.create(student);

// console.log(human.job);

// 4. Class
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const peop = new People(`Manus`, 12);
console.log(peop);

// function

function Manus(name) {
  this.name;
}
const man = new Manus(`kader`);
console.log(man);