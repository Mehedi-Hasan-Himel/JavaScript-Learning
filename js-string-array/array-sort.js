const numbers = [6, 4, 7, 1, 3, 9, 2, 5, 8];
const sortedNumbers = numbers.sort();

// console.log(sortedNumbers);

const friends = ["kabli", "josim", "razzak", "anwar", "deepjol"];

// sort
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// reverse
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

// number sorting
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];

const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);




