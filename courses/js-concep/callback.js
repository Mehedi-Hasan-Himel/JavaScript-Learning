
function welcomeMessage(name, greetHandler) {
  console.log(greetHandler);
  greetHandler(name);
}
// const names = [`Tom Hanks`, `Tom Brady`]
// welcomeMessage(names);

// const myObj = { name: `Tom Hanks`, age: 11 };
// welcomeMessage(myObj);

function greetMorning(name) {
  console.log(`Good Morning`, name);
}

welcomeMessage(`Tom Hanks`, greetMorning);
welcomeMessage(`Tomas Hanks`, greetMorning);

