let balance = 1240;

balance = 1340;

const userName = "Mehedi Hasan Himel.";
const myName = "Ami " + userName;
console.log(myName);
// userName = "Kuhok"; // Not allowed reassign in a const variable.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// numbers = [44, 55, 66]; //Not allowed reassign in a const variable.
numbers.push(555);

numbers[1] = 333;
// console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

const student = {
  roll: 101,
  name: "Himel",
  Job: "Intern",
};
student.name = "Mehedi Hasan Himel";

console.log(student);

// student = {name: "Kuhok"} //Not allowed reassign in a const variable.
