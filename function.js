// Practice Start

// Practice-01 Start
/* 
function joogKor(first, second) {
  joogFol = first + second;
  return joogFol;
}

function duiGoonKor(sonKha) {
  gunFol = sonKha * 2;
  return gunFol;
}

function dharDay(dharAmount) {
  let friendrTaka = dharAmount;
  return friendrTaka;
}

let chalerDam = 28;
let dalerDam = 33;

let total = joogKor(chalerDam, dalerDam);
let dharLagbe = duiGoonKor(total);
let takaPaici = dharDay(dharLagbe);
console.log(takaPaici);
// Practice-01 End

// Practice End

// Function declaration
function turnOnFan() {
  console.log(`Walk towards the switch`);
  console.log(`press the switch`);
}

// call the function
turnOnFan();

function bringSingara(taka) {
  console.log(`Singarar jonno dice `, taka);
  console.log(`Mama singara den`);
  let singaraPrice = 10;
  let singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

let singara = bringSingara(500);
console.log(singara);

function addTwoNumbers(number1, number2) {
  // console.log(number1, number2);
  let addition = number1 + number2;
  return addition;
}

let numbers = addTwoNumbers(35, 40);

console.log(numbers);

function multiplyTwoNumbers(num1,num2) {
  let result = num1 * num2;
  return result;
}

let total = multiplyTwoNumbers(5,100)
console.log(total);

// subtraction 2 numbers
function subtraction(number1, number2) {
  let result = number1 - number2;
  return result;
}
let biyogFol = subtraction(50, 20);
console.log(biyogFol);


// division 2 numbers
function division(number1, number2) {
  let divided = number1 / number2;
  return divided;
}

let result = division(40, 5);
console.log(result);


// 1- Celsius to fahrenheit .
function celsiusToFahrenheit(celsius) {
  let celsiusConvertFahrenheit = celsius * (9 / 5) + 32;
  return celsiusConvertFahrenheit;
}

let temperature = celsiusToFahrenheit(31);
console.log(temperature);


// 2- fahrenheit to Celsius  .
function fahrenheitToCelsius(fahrenheit) {
  let fahrenheitConvertCelsius = (fahrenheit - 32) * (5 / 9);
  return fahrenheitConvertCelsius;
}

let temperature = fahrenheitToCelsius(87.8);
console.log(temperature);


// Task-1 , write a function to find the biggest of three numbers.
function biggestNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  } else if (number2 > number1 && number2 > number3) {
    return number2;
  } else {
    return number3;
  }
}

let big = biggestNumber(200, 59, 7);
console.log(big);

*/
// Task-2 , write a function to find the smallest  of three numbers.

function smallestNumber(number1, number2, number3) {
  if (number1 < number2 && number1 < number3) {
    return number1;
  } else if (number2 < number1 && number2 < number3) {
    return number2;
  } else {
    return number3;
  }
}

let small = smallestNumber(11, 3, 7);
console.log(small);
