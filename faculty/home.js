   // Get the button and the form by their IDs
   const joinUsButton = document.getElementById("joinUsButton");
   const form = document.querySelector(".form");

   // Initially, hide the form
   form.style.display = "none";

   // Add a click event listener to the button
   joinUsButton.addEventListener("click", function() {
       if (form.style.display === "none") {
           // If the form is hidden, show it
           form.style.display = "block";
       } else {
           // If the form is visible, hide it
           form.style.display = "none";
       }
   });