// submit button

document.getElementById('login-button').addEventListener('click', function () {

    //email field and input
    const emailField = document.getElementById('user-email');
    const emailInput = emailField.value;

    //email field and input
    const passField = document.getElementById('user-password');
    const passInput = passField.value;

    // condition to login [Check email and password]

    if (emailInput == 'Manik + Amena' && passInput == 'Love') {
        window.location.href = 'bank.html';
    }
})