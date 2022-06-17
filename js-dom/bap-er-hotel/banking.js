// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposit
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById("deposit-total");

    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal =
      parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // clear the deposit input
    depositInput.value = " ";
  });
