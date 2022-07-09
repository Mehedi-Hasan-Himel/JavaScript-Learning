function add(num1, num2=0) {

   // Option - 02
   // num2 == num2 || 0;

   // Option-01
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
   
  const total = num1 + num2;
  return total;
}

const result = add(15,10);
console.log(result);
