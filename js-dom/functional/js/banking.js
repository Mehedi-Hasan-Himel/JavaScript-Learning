function doubleIt(num) {
  const result = num * 2;

  return result;
}

const first = doubleIt(5);
const second = doubleIt(7);

function getInputValue(inputID) {
  const inputField = document.getElementById(inputID);
  const inputAmount = inputField.value;
  const amountValue = parseFloat(inputAmount);

  //   clear input field
  inputField.value = "";

  return amountValue;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amountValue = getInputValue("deposit-input");

    //   Get current deposit
    const depositTotal = document.getElementById("deposit-total");

    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + amountValue;

    console.log(depositTotalText);

    //   update balance
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

    //   update withdraw total

    const withdrawTotal = document.getElementById("withdraw-total");

    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //   update balance after withdraw

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  });
