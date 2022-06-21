// function doubleIt(num) {
//   const result = num * 2;

//   return result;
// }

// const first = doubleIt(5);
// const second = doubleIt(7);

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

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amountValue = getInputValue("deposit-input");

    // Get and Update deposit total.
    updateTotalField("deposit-total", amountValue);
    /* 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + amountValue;
*/

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + amountValue;
  });

//   handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");

    //  get and update withdraw total

    //  const withdrawTotal = document.getElementById("withdraw-total");
    //  const previousWithdrawTotalText = withdrawTotal.innerText;
    //  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    //  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    updateTotalField("withdraw-total", withdrawAmount);

    //   update balance after withdraw

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  });
