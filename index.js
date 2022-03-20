// var - let - const start

/*
// var
var myName = `Mehedi Hasan Himel`
console.log(myName);

myName = `Rajib Rahman`

console.log(myName);


// let


let myName = `Mehedi Hasan Himel`;
console.log(myName);

myName = `Rajib`;
console.log(myName);



// const


const myName = `mehedi hasan himel`
myName = `rajib`
console.log(myName);

// var - let - const start


// Data Type Start

// String 
const person = `Rajib`
console.log(typeof person)

// number
const no = 50
console.log(typeof no)

// boolean
const isTrue = true 
console.log(typeof isTrue)

// null
const test = null
console.log(typeof test);

// undefined
let himel;
console.log(typeof himel);

// Data Type End
 
// Arithmetic Operator Start

   // Addition
   let x = 10
   let y = 20
   let z = x + y
   console.log(z);

   // Subtraction
   let a = 30;
   let b = 20;
   let c = a - b;
   console.log(c);

   // Multiplication 
   let a = 30;
   let b = 20;
   let c = a * b;
   console.log(c);

   // Exponentiation 
   let a = 3;
   let b = 2;
   let c = a ** b;
   console.log(c);

   // Division
   let a = 30;
   let b = 20;
   let c = a / b;
   console.log(c);

   // Modulus
   let a = 30;
   let b = 20;
   let c = a % b;
   console.log(c);

   // Increment
   let a = 30;
   a++ //a++ = a + 1;
   console.log(a);

   // decrement
   let a = 30;
   a-- //a-- = a - 1;
   console.log(a);

// Arithmetic Operator End



// Assignment Operator Start
   // += 
   let x = 10;
   x += 5; //x = x + 5;
   console.log(x);
   
   // -= 
   let x = 20;
   x -= 5; //x = x - 5;
   console.log(x);
   

   // *= 
   let x = 20;
   x *= 5; //x = x * 5;
   console.log(x);


   // /= 
   let x = 20;
   x /= 5; //x = x / 5;
   console.log(x);


   // %= 
   let x = 20;
   x %= 3; //x = x % 3;
   console.log(x);


   // **= 
   let x = 2;
   x **= 3; //x = x * 3;
   console.log(x);
   
*/
// Assignment Operator End

// Comparison Operator Start

// == equal to
/*
let x = 10;
console.log(x == 10);
*/

// === equal value and equal type
/* 
let x = 10;
console.log(x === 10);
*/

// != not equal
/* 
let x = 10;
console.log(x != 10);
*/

// !== not equal value and not equal type
/* 
let x = 10;
console.log(x !== 10);
*/

// > greater than
/* 
let x = 10;
console.log(x > 10);
*/

// < less than
/* 
let x = 10;
console.log(x < 10);
*/

// >= greater than or equal
/* 
let x = 10;
console.log(x >= 10);
*/

// <= less than or equal
/* 
let x = 10;
console.log(x <= 10);
*/

// Comparison Operator End

// Logical Operator Start

// && and (x < 10 && y > 1) is true
/* 
let x = 5;
let y = 10;
console.log(x < 10 && y > 12); //false
*/

/*
let x = 5;
let y = 10;
console.log( x < 10 && y > 5 ); //true
*/

// || and (x == 10 || y == 1) is false
/*  
let x = 5;
let y = 10;
console.log(x < 10 || y > 12); //true
*/

// Logical Operator End

// Conditional Ternary operator
// syntax variableName = (condition) ? true : false
// Example: let voteAble = (Age < 18) ? "Too Young" : "Old Enough"

// Conditional Statement Start
// if, else if, else start
/*
let time = 4;
if (time >= 5 && time < 12) {
  console.log(`Good morning.`);
} else if (time >= 12 && time <= 14) {
  console.log(`Good noon.`);
} else if (time >= 15 && time <= 19) {
  console.log(`Good evening.`);
} else {
  console.log(`Good night`);
}


let mark = 32;
if (mark >= 80) {
  console.log(`A+`);
} else if (mark <= 79 && mark > 69) {
  console.log(`A`);
} else if (mark <= 69 && mark > 59) {
  console.log(`A-`);
} else if (mark <= 59 && mark > 49) {
  console.log(`B`);
} else if (mark <= 49 && mark >= 33) {
  console.log(`D`);
} else {
   console.log(`Fail`);
}
// if, else if, else end

// Switch Statement Start
let color = `blue`;
switch (color) {
  case `red`:
    color = `Color is red.`;
    break;
  case `blue`:
    color = `Color is blue.`;
    break;
  case `yellow`:
    color = `Color is yellow.`;
    break;
  default:
    color = `nothing.`;
    break;
}
console.log(color);
// Switch Statement End

// Conditional Statement End

// for loop Start
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
     console.log(i + ` even number`);
  } else {
    console.log(i + ` odd number`);
  }
}
// for loop End

// While loop Start
let i = 50;
while (i >= 1) {
  if (i % 2 == 0) {
    console.log(i + ` Even Number`);
  } else {
    console.log(i + ` Odd Number`);
  }
  i--;
}
// While loop End

// Array Start

// Accessing array element.
let colors = [`red`, `green`, `blue`];
console.log(colors);
console.log(colors[0]);

// Changing an array element
let colors = [`red`, `green`, `blue`];

let change = (colors[1] = `orange`);
console.log(change);

// Array Lenth
let colors = [`red`, `green`, `blue`];

console.log(colors.length);

// Accessing the first array element.
let colors = [`red`, `green`, `blue`];

console.log(colors[0]);

// Accessing the last array element.
let colors = [`red`, `green`, `blue`];

console.log(colors[colors.length - 1]);

// popping and pushing
let colors = [`red`, `green`, `blue`];

console.log(colors.pop());
console.log(colors.push(`teal`));

// Deleting Elements.
let colors = [`red`, `green`, `blue`];
delete colors[1]
console.log(colors);

// Merging Array 
let colors1 = [`red`, `green`, `blue`];
let colors2 = [`teal`, `aqua`, `white`];
let newColor = colors1.concat(colors2)
console.log(newColor);


// Slicing array
let colors = [`red`, `green`, `blue`];
let slice = colors.slice(2)
console.log(slice);

// Short array
let colors = [`red`, `green`, `blue`];
colors.sort()
console.log(colors);

// Short array
let colors = [`red`, `green`, `blue`];
colors.reverse()
console.log(colors);
// Array End
*/

let choukirTola = [
  `tShirt`,
  `jeans`,
  `juta`,
  `boi`,
  `gamcha`,
  `charger`,
  `panjabi`,
];

for (let i = 0; i < choukirTola.length; i++){
  let jinish = choukirTola[i];
  if (jinish  == `charger`) {
    console.log(`Charger Paici`);
    console.log(choukirTola.indexOf(`charger`));
    console.log(choukirTola.indexOf(`balish`));

  }
}

