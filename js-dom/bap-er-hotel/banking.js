// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposit
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById("deposit-total");
    depositTotal.innerText = depositAmount;

    // clear the deposit input
    depositInput.value = " ";
  });
