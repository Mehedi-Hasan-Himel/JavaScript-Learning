function addNumbers(num1, num2) {
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }

  return result;
}

const sum = addNumbers(23, 13, 50, 100);
console.log(sum);

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const name = getFullName("Hanif", "Sonket");
console.log(name);
