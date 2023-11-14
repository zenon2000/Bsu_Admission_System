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
document.addEventListener('DOMContentLoaded', function () {
    var registerEmailInput = document.getElementById('registerEmail');

    registerEmailInput.addEventListener('input', function () {
        // Store the entered email in a variable
        var enteredEmail = registerEmailInput.value;

        // Set the entered email in a cookie or local storage
        localStorage.setItem('enteredEmail', enteredEmail);
    });
});