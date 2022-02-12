// Manik Formula

// deposit part

document.getElementById('deposit-button').addEventListener('click', function () {

    // button jader niye kaj korbe tader sobaike 'id' diye dhore ana hoiche
    const depositInput = document.getElementById('deposit-input');
    const depositBalance = document.getElementById('deposit-balance');
    const totalBalance = document.getElementById('total-balance');

    // dhore anar por tader 'value' ke number e convert kora hoiche
    const newDepositAmount = parseFloat(depositInput.value);
    const previousDepositBalance = parseFloat(depositBalance.innerText);
    const previousTotalBalance = parseFloat(totalBalance.innerText);

    // erpor jog kora hoiche
    depositBalance.innerText = previousDepositBalance + newDepositAmount;
    totalBalance.innerText = previousTotalBalance + newDepositAmount;

    // input field clear kora hoiche
    depositInput.value = '';

})


// withdraw part start

document.getElementById('withdraw-button').addEventListener('click', function () {

    // button jader niye kaj korbe tader sobaike 'id' diye dhore ana hoiche
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawBalance = document.getElementById('withdraw-balance');
    const totalBalance = document.getElementById('total-balance');

    // dhore anar por tader 'value' ke number e convert kora hoiche
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    const previousWithdrawBalance = parseFloat(withdrawBalance.innerText);
    const previousTotalBalance = parseFloat(totalBalance.innerText);

    // erpor jog biyog kora hoiche
    withdrawBalance.innerText = previousWithdrawBalance + newWithdrawAmount;
    totalBalance.innerText = previousTotalBalance - newWithdrawAmount;

    // input field clear kora hoiche
    withdrawInput.value = '';

})