// Stack Start
// LIFO = Last In Fast Out

let winterClothes = [];

// array.push(); Start
winterClothes.push(`Genji`);
winterClothes.push(`Shirt`);
winterClothes.push(`Sweater`);
winterClothes.push(`Jacket`);
winterClothes.push(`Chador`);
// array.push(); End

console.log(winterClothes);


// array.pop(); Start
winterClothes.pop()
winterClothes.pop()
winterClothes.pop()
winterClothes.pop()
// array.pop(); End

console.log(winterClothes);

// Stack End


// Queue Start
// FIFO = First In First Out.

let khataQueue = [];

khataQueue.push(`Aminul`);
khataQueue.push(`Mominul`);
khataQueue.push(`Kamrul`);
khataQueue.push(`Nazrul`);
khataQueue.push(`Khairul`);

console.log(khataQueue);

khataQueue.shift()

console.log(khataQueue);

// Queue End

// Object Start

// Chair Object Start
var myChair = {
   legs: 4,
   hands: 2,
   hasFoam: true,
}

console.log(myChair);

myChair.legs = 3;
myChair.hands = false;
myChair.hasFoam = false;

console.log(myChair);
// Chair Object End

// Guitar Object Start

let myGuitar = {
   guitarString: 6,
   fret: true,
   keys: true,
   board: true,
   Bag: `Black`,
   capo: true,
}

console.log(myGuitar);
// Guitar Object End

// Car Object Start

let auto = {
   wheel: 4,
   color: `Red`,
   light: 5,
   sit: 8,
}

console.log(auto);
// Car Object End
// Object End