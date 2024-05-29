document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (validateEmail(email) && password.length > 0) {
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Please enter a valid email and password.';
        errorMessage.style.display = 'block';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showSignupForm() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('signup-container').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signup-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}

function redirectToHome() { // Function to handle redirection to home page
    window.location.href = 'home.html';
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('phone').value;
    const newPassword = document.getElementById('new-password').value; // New password field

    if (firstName && lastName && validateEmail(email) && phone && newPassword) {
        // Perform sign-up logic here
        alert('Sign-up successful!');
        showLoginForm();
    } else {
        alert('Please fill in all the required fields.');
    }
});
