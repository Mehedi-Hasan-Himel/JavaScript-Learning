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

// Get current balance
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  return previousBalanceTotal;
}

// Update balance

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const previousBalanceTotal = parseFloat(balanceTotalText);
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");

    if (depositAmount > 0) {
      // Get and Update total deposit balance.
      updateTotalField("deposit-total", depositAmount);
      // update balance.
      updateBalance(depositAmount, true);
    } else {
    }
  });

//   handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
     const withdrawAmount = getInputValue("withdraw-input");
     const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
      //  get and update withdraw total
      updateTotalField("withdraw-total", withdrawAmount);
      //   update balance after withdraw
      updateBalance(withdrawAmount, false);
    }
     if (withdrawAmount > currentBalance) {
      console.log(`Your can't withdraw more than what you have in your account`);
     }
  });
