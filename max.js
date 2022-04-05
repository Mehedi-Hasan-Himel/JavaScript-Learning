// তিনটি সংখ্যার মধ্যে বড় সংখ্যা নির্ণয় করো ।

const business = 450;
const minister = 350;
const army = 600;

if (business > minister && business > army) {
  console.log(`Business is bigger.`);
} else if (minister > business && minister > army) {
  console.log(`Minister is bigger.`);
} else {
  console.log(`Army is bigger.`);
}

