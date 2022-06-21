// Getting input value from input field function().

function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputAmount = inputField.value;
  const amountValue = parseFloat(inputAmount);

  //   clear input field
  inputField.value = "";

  return amountValue;
}

// update total field function().

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

// Update balance

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amountValue = getInputValue("deposit-input");

    // Get and Update deposit total.
    updateTotalField("deposit-total", amountValue);

    // update balance
    updateBalance(amountValue, true);
  });

//   handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");

    //  get and update withdraw total

    updateTotalField("withdraw-total", withdrawAmount);

    //   update balance after withdraw

    updateBalance(withdrawAmount, false);
  });
