const names = [
  `Abul`,
  `Babul`,
  `Cabul`,
  `Dabul`,
  `Ebul`,
  `Fabul`,
  `Babul`,
  `Ebul`,
  `Babul`,
  `Gabul`,
  `Abul`,
  `Habul`,
  `Dabul`,
];

function removeDuplicats(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

let result = removeDuplicats(names);
console.log(result);
