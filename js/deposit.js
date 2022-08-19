// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);

    // step-7: clear the deposit field
    depositField.value = '';

    if (isNaN(NewDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3: get the current deposit amount
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + NewDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})