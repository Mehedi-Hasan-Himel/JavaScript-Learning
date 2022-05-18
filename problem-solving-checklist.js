// 1. Conversion
// feetToInch;
/*
function feetToInch(feet) {
   let inch = feet * 12;
   return inch;
}
let myHeight = feetToInch(6);
console.log(myHeight + ` Inch`);
*/

// 2. Conversion , [-centimeterToMeter-]
/* 
function centimeterToMeter(centimeter) {
  let miter = centimeter / 100;
  return miter;
}
let lenth = centimeterToMeter(500);
console.log(lenth + ` Miter`);
*/

// 3. Calculation , [-pageRequirements-]

// book1 has 100 pages.
// book2 has 200 pages.
// book3 has 300 pages.
/*
function pageRequirements(book1, book2, book3) {
  let pageForBook1 = book1 * 100;
  let pageForBook2 = book2 * 200;
  let pageForBook3 = book3 * 300;

  let TotalBook1 = console.log(`We need ` + pageForBook1 + ` page for Book 01`);
  let TotalBook2 = console.log(`We need ` + pageForBook2 + ` page for Book 02`);
  let TotalBook3 = console.log(`We need ` + pageForBook3 + ` page for Book 03`);
  let totalBook =
    `We need ` +
    (pageForBook1 +
    pageForBook2 +
    pageForBook3) +
    ` page for Book 03`;

  return TotalBook1, TotalBook2, TotalBook3, totalBook;
}

let pages = pageRequirements(3, 4, 5);
console.log(pages);
*/

// 4.friends , [-bestFriend-]
/*
let friends = [
  `Tasnim Tanmoon`,
  `Sahinur Rahman`,
  `Moniruzzaman Monir`,
];
let large
function bestFriend(friends) {
  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    return element;
  }
}

console.log(bestFriend(friends));
*/

/*
let friends = [`Tasnim Tanmoon`, `Sahinur Rahman`, `Moniruzzaman Monir`];

function longest_str_in_array(arra) {
  let max_str = arra[0].length;
  let ans = arra[0];
  for (let i = 1; i < arra.length; i++) {
    let maxi = arra[i].length;
    if (maxi > max_str) {
      ans = arra[i];
      max_str = maxi;
    }
  }
  return ans;
}
let result = longest_str_in_array(friends);
console.log(result);
*/

// 5. will stop the loop if the array has any negative number and returns all the positive number before the negative number.  [-onlyPositive-]

let numbers = [1, 2, 3, 4, 5, -1, 22, 33, 44, -5, -6, -7, 77, 66, 88, 99];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];


}


