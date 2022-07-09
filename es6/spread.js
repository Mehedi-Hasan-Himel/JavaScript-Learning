const numbers = [23, 65, 99, 500, 21, 34];
console.log(numbers);
console.log(...numbers);

const max = Math.max(23, 99, 65);
console.log(max);

const maxInArray = Math.max(...numbers);
console.log(maxInArray);

const numbers2 = [22,...numbers,38];
numbers.push(600);
console.log(numbers2);
