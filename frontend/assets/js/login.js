document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the visibility of forms
    function toggleForms(loginFormVisible, registrationFormVisible) {
        document.getElementById('loginForm').style.display = loginFormVisible ? 'block' : 'none';
        document.getElementById('registrationForm').style.display = registrationFormVisible ? 'block' : 'none';
    }

    document.getElementById('joinUsButton').addEventListener('click', function() {
        // Toggle the visibility of the login form and hide the registration form
        toggleForms(false, true);
    });

    document.getElementById('loginLink').addEventListener('click', function() {
        // Toggle the visibility of the registration form and hide the login form
        toggleForms(true, false);
    });

    // Add event listener for the "Sign up" link inside the login form
    document.getElementById('signupLink').addEventListener('click', function() {
        // Toggle the visibility of the registration form and hide the login form
        toggleForms(false, true);
    });


});
