const anthem = "Amar Sonar Bangla, Ami Tomay Vhalobashi !!!";
const words = anthem.split(" ");

const withoutA = anthem.split("a");
console.log(words);
console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 6);
console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

// concat
const first = "Amader";
const second = "City";

// const fullString = first + second;
const fullString = first.concat(second);
console.log(fullString);

const word = ["alim", "badhon", "cameron", "david"];
// const allJoined = word.join("");
// const allJoined = word.join(" ");
const allJoined = word.join(",  ");
console.log(allJoined);
