document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add authentication logic here (e.g., send a request to a server for validation).
        // For this example, we'll simply alert the credentials.

        alert(`Username: ${username}\nPassword: ${password}`);
    });
});
