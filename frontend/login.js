document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('joinUsButton').addEventListener('click', function() {
        // Toggle the visibility of the login form and hide the registration form
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registrationForm').style.display = 'none';
    });

    document.getElementById('signupLink').addEventListener('click', function() {
        // Toggle the visibility of the registration form and hide the login form
        document.getElementById('registrationForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    });

    // Add event listener for the "Login" link inside the registration form
    document.getElementById('loginLink').addEventListener('click', function() {
        // Toggle the visibility of the login form and hide the registration form
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registrationForm').style.display = 'none';
    });
});