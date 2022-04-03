/*
let numbers = [1, 4, 5, 2, 3, 8, 77, 66, 44, 7];
for (let i = 0; i < numbers.length; i++) {
  let elements = numbers[i];
  console.log(elements);
}
*/

let bookList = [`positioning`, `hoked`, `start with why`, `Shoe Dog`]
let ShoeDogIndex = bookList.indexOf(`Shoe Dog`);
bookList[1] = `Story Brand`
bookList.push(`Small Giant`)
bookList.pop()


console.log(bookList);