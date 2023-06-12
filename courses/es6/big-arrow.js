const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result);

const fiveTimes = (num) => num * 5;
const output = fiveTimes(10);
console.log(output);

const tenTimes = (num) => num * 5;
const value = tenTimes(17);
console.log(value);

const getName = () => `Tasnim Tanmoon`;
const name = getName();
console.log(name);

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
};

const total = doMath(12, 5);
console.log(total);

document.getElementById("my-button").addEventListener((event) => {});
