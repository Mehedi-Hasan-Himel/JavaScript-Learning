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
/**/
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

// 4.friends , [-bestFriend-]

// 5. will stop the loop if he array has any negative number and returns all the positive number before the negative number.  [-onlyPositive-]
