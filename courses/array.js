/*
let numbers = [1, 4, 5, 2, 3, 8, 77, 66, 44, 7];
for (let i = 0; i < numbers.length; i++) {
  let elements = numbers[i];
  console.log(elements);
}

let bookList = [`positioning`, `hoked`, `start with why`, `Shoe Dog`]
let ShoeDogIndex = bookList.indexOf(`Shoe Dog`);
bookList[1] = `Story Brand`
bookList.push(`Small Giant`)
bookList.pop()


console.log(bookList);

let phones = [`iphone`, `Xaomi`, `Vivo`, `Motorola`, `LG`];
phones[3] = `Realme`;

// check an element exist in array.
if (phones.indexOf(`OPPO`) == -1) {
  console.log(`oops ! Amir khan's oppo is mission.`);
}

// check an element is available.
if (phones.indexOf(`LG`) != -1) {
  console.log(`LG is available now. `);
}

let numbers = [44, 33, 666, 777, 88, 99, 109];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
  console.log(sum);
}


// array এর সব element যোগ করার function.


let numbers = [44, 33, 666, 777, 88, 99, 109];

function arrayTotal(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

let add = arrayTotal(numbers)
console.log(add);

// Find the "Largest Element" from an array.

function largestElement(numbers) {
  let largest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element>largest) {
      largest = element;
    }
  }
  return largest;
}

let ages = [1299, 504, 92, 34, 75, 32, 12];
let oldest = largestElement(ages);
console.log(oldest);


// Find the lowest element of an array.

function lowestElement(numbers) {
  let lowest = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}

let number = [2, 5, 7, 8, -90, 77, 88, 1];
let low = lowestElement(number);
console.log(low);
*/
