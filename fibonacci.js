/*

const fibonacci = [0, 1];
for (let index = 2; index < 10; index++) {
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}
console.log(fibonacci); 

function fibonacciSeries(num) {
  if (typeof num != `number`) {
    return `Please give a number.`;
  } else if (num < 2) {
    return `Please enter a positive number.`
  }
  const fibo = [0, 1];
  for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

const fiboSeries = fibonacciSeries(3);
console.log(fiboSeries);

*/
