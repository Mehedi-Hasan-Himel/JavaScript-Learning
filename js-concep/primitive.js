/*
Data Types of JavaScript:
primitive data type
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

non primitive
7. object
*/

let a = `hello`;
let b = a;

// console.log(a, b);
a = `gelo`;
// console.log(a, b);

const x = {
  job: `Web Developer`,
};
const y = x;

console.log(x, y);

y.job = `Front End Developer`;
console.log(x, y);
