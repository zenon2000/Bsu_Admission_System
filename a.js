function generateApplicantNumber() {
    // Get the current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    const year = currentDate.getFullYear();

    // Get the order of the user (you can replace this with your logic to determine the order)
    const userOrder = 1; // Replace this with your logic to get the user order

    // Format the date and user order to create the applicant number
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    const applicantNumber = `${formattedDate}-${userOrder}`;

    // Set the generated applicant number to the input field
    document.getElementById('applicant_number').value = applicantNumber;
  }

  // Call the function when the page loads
  window.onload = generateApplicantNumber;