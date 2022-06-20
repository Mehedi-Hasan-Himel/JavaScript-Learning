document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const depositAmount = depositInput.value;

    //   Get current deposit
    const depositTotal = document.getElementById("deposit-total");

    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositTotalText);

    //   clear input field

    depositInput.value = "";
  });
