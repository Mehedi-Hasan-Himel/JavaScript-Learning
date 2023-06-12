// `use strict`;
/* 
`use strict`;

test = `hello world`;
console.log(test);

// template literals
let fname = `David John`
let age = 25;
console.log(`My name is ${fname} and age is ${age}`);

// Spread Operator.
let name1 = [`david`, `Jhon`, `Doe`];
let name2 = [...name1, `Wick`, `Jhonson`, `William`];
console.log(name2);


// for of loop.
let names = [`David`, `Jhon`, `Wick`, `Mick`, `William`]
for (let oneName of names) {
   console.log(oneName);
}

let numbers = [10, 20, 30];
for (let number of numbers) {
   number = number + 10;
   console.log(number);
}
*/

// Array.Concat()
let name1 = [`Jhon`, `David`, `Wick`];
let name2 = [`Grill`, `Nun`]
let name3 = [`Jhon`, `David`, `Wick`];
let name4 = [`Grill`, `Nun`];



let newName = name1.concat(name2,name3,name4)
console.log(newName);

