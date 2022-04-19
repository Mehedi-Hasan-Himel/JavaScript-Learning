/*
// this
const person = {
  firstName: "Mehedi",
  middleName: "Hasan",
  lastName: "Himel",
  id: 47608,
  fullName: function () {
    return this.firstName + ` ` + this.middleName + ` ` + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};

console.log(person.getFullName());

*/

// call()

const person1 = {
  fullName: function () {
    return this.firstName + ` ` + this.middleName + ` ` + this.lastName;
  },
};

const person2 = {
  firstName: "Mehedi",
  middleName: "Hasan",
  lastName: "Himel",
  id: 47608,
};

console.log(person1.fullName.call(person2));
