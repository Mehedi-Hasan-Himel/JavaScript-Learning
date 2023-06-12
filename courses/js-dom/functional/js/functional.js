function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  const value = parseFloat(valueInText);
  inputField.value = " ";
  return value;
}

function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueInText = fieldTag.innerText;
  const value = parseFloat(fieldValueInText);
  return value;
}

function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotalInText = totalTag.innerText;
  const previousTotal = parseFloat(previousTotalInText);
  const newTotal = previousTotal + amount;
  totalTag.innerText = newTotal;
}

function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById("balance-total");
  const balanceInText = balanceTag.innerText;
  const previousBalance = parseFloat(balanceInText);
  let newBalance;
  if (isAdding == true) {
    newBalance = previousBalance + amount;
  } else {
    newBalance = previousBalance - amount;
  }
  balanceTag.innerText = newBalance;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount, true);
    }
  });

// handel withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total")
    if (amount > 0 && amount <= balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
