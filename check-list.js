// 1. Comment In Js.

// Single line comment
/*
Multiline comment. 
*/

// 2. Write 3 variables. (Number , String , Boolean)
/*
let number = 5;
let sentence = `This is a pen.`;
let isTrue = true;
*/

// 3. 2 variables using . (let, Const)
/*
let name = `Himel`;
myName = `Mehedi Hasan Himel`;
console.log(myName);
*/
/*
A variable which is declared by 'let' , can change it's value multiple time. 
*/
/*
const PI = 3.1416;
console.log(PI);
*/
/*
A variable which is declared by 'const' , can not change it's value after declare time. 
*/

// 4. Simple Math operation(+, -, *, /, %)
/* 
let number1 = 5;
let number2 = 7;

let add = number1 + number2;
console.log(add);

let sub = number1 - number2;
console.log(sub);

let multiple = number1 * number2;
console.log(multiple);

let div = number1 / number2;
console.log(div);

let mud = number2 % number1;
console.log(mud);
*/
// 5. Comparison (<, >, ===, <=, >=, !=)
/*
let a = 6;
let b = 8;

let lessThan = a < b;
console.log(lessThan);

let gaterThan = a > b;
console.log(gaterThan);

let equal = a === b;
console.log(equal);

let lessThanOrEqual = a <= b;
console.log(lessThanOrEqual);

let gaterThanOrEqual = a >= b;
console.log(gaterThanOrEqual);

let notEqual = a != b;
console.log(notEqual);
*/
// 6. Two condition. Case 1: Fulfill both condition. Case 2: Fulfill at list one condition.
/* 
let num1 = 2, num2 = 13 , num3 = 5;

if (num1 > 5 && num1 < 10) {
   console.log(`The number is between 6 to 9`);
   
} else if(num1 >= 5 || num1 <= 10){
      console.log(`The number is between 5 to 10`);
} 
*/

// 7. While loop to display 7 to 19 all numbers. only display odd numbers between 7 to 19 . only display even numbers between 7 to 19 .

// While loop to display 7 to 19 all numbers.
/*
let number7 = 7;
while (number7 <= 19) {
  console.log(number7);
  number7++;
}
*/
// only display odd numbers between 7 to 19 .
/*
let number71 = 7;
while (number71 <= 19) {
  let increase = number71++;
  if (increase % 2 === 0) {
    console.log(increase);
  }
}
*/

// only display even numbers between 7 to 19 .

/*
let number71 = 7;
while (number71 <= 19) {
  let increase = number71++;
  if (increase % 2 ==! 0) {
    console.log(increase);
  }
}
*/
// 8. Declare an array. Number an element. 4th position update or change. add or remove elements. Check whether specific value exists in the array.

// Declare an array.
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Number an element.
/*
let numberOfElement = numbers.length;
console.log(numberOfElement);
*/

// 4th position update or change.
/*
let element4 = numbers;
element4[4] = 100;
console.log(numbers);
*/
//  add or remove elements.
/*
let remove = numbers.pop()
console.log(numbers);

let add = numbers.push(10)
console.log(numbers);
*/

// Check whether specific value exists in the array.
/*
if (numbers.indexOf(007) !== -1) {
  console.log(`There is the number`);
} else {
  console.log(`There isn't the number`);
}
*/
// 9. use any for loop to display every elements of an array
/*
let numbers = [1, 4, 5, 2, 3, 8, 77, 66, 44, 7];
for (let i = 0; i < numbers.length; i++) {
  let elements = numbers[i];
  console.log(elements);
}
*/
// 10. Your have an array of numbers. Display only the bigger then 80.
/*
// Formula 01

const arr = [1, 2, 3, 4, 5, 66, 77, 888, 99, 0998, 4455, 666];
finalArray = [];

arr.map((item) => {
  if (item >= 80) {
    finalArray.push(item);
  }
});

console.log(finalArray);

// Formula 02
const array = [1, 80, 2, 85, 100, 10,44,66,44,4,6,6,7777,5554,444];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element > 80) {
    console.log(element);
  }
  
}
*/

// 11. Write a function that takes 3 numbers and returns  the multiplications of the 3 numbers

/*
function multi(number1, number2, number3) {
  let multiple = number1 * number2 * number3;
  return multiple;
}

let result = multi(3, 4, 5);

console.log(result);

*/

