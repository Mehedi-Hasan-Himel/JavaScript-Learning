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
  let fullName = "";
  for (const part of arguments) {
    fullName = fullName + part + " ";
  }
  return fullName;
}

const name = getFullName("Omuk", "sonket", "bin", "Hanif", "Sonket","bin","tomuk,","komuk","sonket");
console.log(name);
