function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please provide an array of string.";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
    }
  }
  return mega;
}

const friends = ["Kutub", "Lion", "Shamol", "Sabbir"];
// const myBigBuddy = megaFriend(88);

// if (friends.indexedOf("Lion") != -1) {
  //   console.log("Lion Exist.");
// }

if (friends.includes("lion")) {
  console.log("Lion Exist.");
}

// console.log(myBigBuddy);
