document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('joinUsButton').addEventListener('click', function() {
        // Toggle the visibility of the login form and hide the registration form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registrationForm').style.display = 'block';
    });

    document.getElementById('loginLink').addEventListener('click', function() {
        // Toggle the visibility of the registration form and hide the login form
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Add event listener for the "Sign up" link inside the login form
    document.getElementById('signupLink').addEventListener('click', function() {
        // Toggle the visibility of the registration form and hide the login form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registrationForm').style.display = 'block';
    });
});
