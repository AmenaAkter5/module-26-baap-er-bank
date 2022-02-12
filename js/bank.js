// unorganised js for bank


// handle deposit-button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input field :

    // new deposit amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    // convert in number from string
    const newDepositAmount = parseFloat(newDepositText);

    // ===================

    // update total deposit balance box :

    // previous total deposit balance
    const depositBalance = document.getElementById('deposit-balance');
    const previousDepositText = depositBalance.innerText;
    // convert in number from string
    const previousDepositAmount = parseFloat(previousDepositText);

    // new total deposit balance [previous balance + new deposit]
    const newTotalDeposit = previousDepositAmount + newDepositAmount;

    depositBalance.innerText = newTotalDeposit;

    // ===================

    // update total Account balance Box: After new deposit

    // previous total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    // convert in number from string
    const previousTotalBalance = parseFloat(totalBalanceText);

    // new total balance [previous total balance + new deposit]
    const newTotalBalance = previousTotalBalance + newDepositAmount;

    totalBalance.innerText = newTotalBalance;

    // clear the deposit input field
    depositInput.value = '';

});



// handle withdraw-button event

document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input field

    // new withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    // convet in number
    const newWithdrawBalance = parseFloat(newWithdrawText);

    // ===================

    // update total withdraw balance Box:

    // previous withdraw balance
    const withdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawText = withdrawBalance.innerText;
    // convert in number
    const previousWithdrawBalance = parseFloat(previousWithdrawText);

    // new total withdraw balance [previous + new]
    const newTotalWithdraw = previousWithdrawBalance + newWithdrawBalance;

    withdrawBalance.innerText = newTotalWithdraw;

    // ===================

    // update total Account balance Box: After new withdraw

    // previous total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    // convert in number from string
    const previousTotalBalance = parseFloat(totalBalanceText);

    // new total balance [previous total balance + new deposit]
    const newTotalBalance = previousTotalBalance - newWithdrawBalance;

    totalBalance.innerText = newTotalBalance;

    // clear withdraw input field
    withdrawInput.value = '';

});


