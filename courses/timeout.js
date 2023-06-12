function doSomething() {
  console.log(`I'm coding JavaScript`);
}

console.log(`First: I'm first.`);
console.log(`Second: I'm second person.`);
// setTimeout(doSomething, 1000);
setTimeout(function () {
  console.log(`I'm using VS Code`);
}, 5000);

setTimeout(() => {
   console.log(`Exploring MDN Article`);
},4000)
console.log(`Third: I'm third person.`);
console.log(`Fourth: I'm Fourth person.`);
