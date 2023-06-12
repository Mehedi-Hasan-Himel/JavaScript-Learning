// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposit
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //   Update Deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //   Update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input
    depositInput.value = " ";
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // Set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");

    const previousWithdrawText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = " ";
  });
