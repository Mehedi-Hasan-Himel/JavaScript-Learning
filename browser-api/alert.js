console.log(`I'm here`);
// alert(`Ma is coming.`)

const maComing = () => {
  alert(`Ammu is coming , open the book.`);
};

const askPicnic = () => {
  const response = confirm(`Are you going to picnic  ?`);
  console.log(response);

  if (response == true) {
    alert(`amake fee ta bkash kore de`);
  } else {
    alert(`DGM !!! Dure Giya Mor`);
  }
};

const askName = () => {
  const name = prompt(`What's your name?`);
  console.log(name);
  if (name) {
    console.log(name);
  }
};
