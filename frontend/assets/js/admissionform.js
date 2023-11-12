// Default tab
$(".tab").css("display", "none");
$("#tab-1").css("display", "block");

// Initialize an array to keep track of completed steps
var completedSteps = [];

function run(hideTab, showTab) {
  if (hideTab < showTab) { // If not pressing the previous button
    // Validation if pressing the next button
    var currentTab = 0;
    x = $('#tab-' + hideTab);
    y = $(x).find("input, select");

    if (hideTab === 1) {

      // Validate the selected program
      var natureOfDegree = document.getElementById("categoryDropdown").value;
      if (natureOfDegree === "") {
        alert("Please select the nature of the degree before proceeding.");
        return false;
      }

      // Additional validation based on the natureOfDegree can be added here if needed

      // If the nature of the degree is "Board", prompt for grades
      if (natureOfDegree === "Board") {
        var englishGrade = parseFloat(document.getElementById("englishGrade").value);
        var mathGrade = parseFloat(document.getElementById("mathGrade").value);
        var scienceGrade = parseFloat(document.getElementById("scienceGrade").value);

        if (isNaN(englishGrade) || isNaN(mathGrade) || isNaN(scienceGrade) ||
          englishGrade < 0 || mathGrade < 0 || scienceGrade < 0 ||
          englishGrade > 100 || mathGrade > 100 || scienceGrade > 100) {
          alert("Please enter valid grades for english, Math and Science before proceeding");
          return false;
        }
      } else if (natureOfDegree === "Non-board") {
        // If the nature of the degree is "Non-board", prompt for GWA
        var gwaGrade = parseFloat(document.getElementById("gwaGrade").value);

        if (isNaN(gwaGrade) || gwaGrade < 0 || gwaGrade > 100) {
          alert("Please enter a valid GWA before proceeding.");
          return false;
        }
      }

      // Prompt the user to select a program
      var selectedProgram;
      if (natureOfDegree === "Board") {
        selectedProgram = document.getElementById("board-programs").value;
        if (selectedProgram === "") {
          alert("Please select a board program before proceeding.");
          return false;
        }
      } else if (natureOfDegree === "Non-board") {
        selectedProgram = document.getElementById("NonBoardProgram").value;
        if (selectedProgram === "") {
          alert("Please select a non-board program before proceeding.");
          return false;
        }
      }

      // Validate the checkbox in Tab 1
      if (!document.getElementById("read-guidelines").checked) {
        alert("Please check the box to confirm that you have read the guidelines.");
        return false;
      }

    } else if (hideTab === 2) {
      // Handle the file input label click
      $('label[for="id_picture"]').click(function () {
        $('input[name="id_picture"]').click();
      });

      // Display the selected file name
      $('input[name="id_picture"]').change(function () {
        var fileName = $(this).val().split("\\").pop();
        $('label[for="id_picture"]').text(fileName);
      });
      // Validate the picture input
      var pictureInput = $('input[name="id_picture"]');
      if (pictureInput[0].files.length === 0) {
        alert("Please upload an ID picture.");
        return false;
      }

      // Validate the e-signature
      if (signaturePad.isEmpty()) {
        alert("Please provide your e-signature.");
        return false;
      }
      // Display a confirmation dialog for the user to check information before proceeding
      if (!confirm("Are you sure you want to proceed to the next step? Please double-check your information on this page.")) {
        return false;
      }
    } else if (hideTab === 3) {
      // Validating the applicant's e-signature in Tab 3
      if (applicantSignaturePad.isEmpty()) {
        alert("Please provide the applicant's e-signature.");
        return false;
      }
    }

    for (i = 0; i < y.length; i++) {
      if ((hideTab === 2 || hideTab === 3) && y[i].value === "") {
        // Handle empty fields with visual cues
        $(y[i]).css("background", "#ffdddd");
        y[i].placeholder = "Please fill up all the field";
        y[i].focus();
        return false;
      }
    }
    // Mark the step as completed
    completedSteps[hideTab - 1] = true;
  }

  // Progress bar
  for (i = 1; i < showTab; i++) {
    $("#step-" + i).css("opacity", "1");
    if (completedSteps[i - 1]) {
      $("#step-" + i).html('<i class="fas fa-check"></i>'); // Add a checkmark
    }
  }

  // Switch tab
  $("#tab-" + hideTab).css("display", "none");
  $("#tab-" + showTab).css("display", "block");
  $("input, select").css("background", "#fff");

  window.scrollTo(0, 0);
}



function updateSelection() {
  var natureOfDegree = document.getElementById("categoryDropdown").value;

  // Hide all program fields initially
  document.getElementById("boardFields").style.display = "none";
  document.getElementById("nonBoardField").style.display = "none";
  document.getElementById("boardProgramsDropdown").style.display = "none";
  document.getElementById("nonBoardProgramsDropdown").style.display = "none";

  if (natureOfDegree === "Board") {
    // Show board program fields
    document.getElementById("boardFields").style.display = "block";
  } else if (natureOfDegree === "Non-board") {
    // Show non-board program fields
    document.getElementById("nonBoardField").style.display = "block";
  }

  // Copy the selected nature of degree to Tab-2 input field
  document.getElementById("nature_of_degree").value = natureOfDegree;

}
function updateDegreeFields() {
  // Get the selected value from the board program dropdown
  var selectedValueBoard = document.getElementById("board-programs").value;

  // Get the selected value from the non-board program dropdown
  var selectedValueNonBoard = document.getElementById("NonBoardProgram").value;

  // Determine which dropdown is selected and update the input fields accordingly
  var selectedValue = selectedValueBoard || selectedValueNonBoard;

  // Set the selected value in the first input field
  document.getElementById("degree_applied").value = selectedValue;

  // Set the selected value in the second input field
  document.getElementById("slip_degree").value = selectedValue;
}

function calculateGWA() {
  var natureOfDegree = document.getElementById("categoryDropdown").value;

  if (natureOfDegree === "Board") {
    // Assuming you have input fields with IDs: englishGrade, mathGrade, scienceGrade
    var englishGrade = parseFloat(document.getElementById("englishGrade").value);
    var mathGrade = parseFloat(document.getElementById("mathGrade").value);
    var scienceGrade = parseFloat(document.getElementById("scienceGrade").value);

    // Check if grades are within the accepted range (75-99)
    if (englishGrade >= 75 && mathGrade >= 75 && scienceGrade >= 75 && englishGrade <= 99 && mathGrade <= 99 && scienceGrade <= 99) {
      // Calculate GWA
      var gwa = (englishGrade + mathGrade + scienceGrade) / 3;
      document.getElementById("gwaResult").innerText = "GWA: " + gwa.toFixed(2) + "%";

      // Check if GWA is above the required threshold (86%)
      if (gwa >= 86) {
        // Show board programs dropdown
        document.getElementById("boardProgramsDropdown").style.display = "block";
      } else {
        alert("You didn't pass the required GWA (86% or above) for board programs.");
      }
    } else {
      alert("Please enter valid grades between 75 and 99.");
    }
  }
}

function submitNonBoardForm() {
  var natureOfDegree = document.getElementById("categoryDropdown").value;

  if (natureOfDegree === "Non-board") {
    // Assuming you have an input field with ID: gwaGrade
    var gwaGrade = parseFloat(document.getElementById("gwaGrade").value);

    // Check if GWA is within the accepted range (80-99)
    if (gwaGrade >= 80 && gwaGrade <= 99) {
      document.getElementById("nonBoardGwaResult").innerText = "GWA: " + gwaGrade.toFixed(2) + "%";

      // Check if GWA is above the required threshold (80%)
      if (gwaGrade >= 80) {
        // Show non-board programs dropdown
        document.getElementById("nonBoardProgramsDropdown").style.display = "block";
      } else {
        alert("You didn't pass the required GWA (80% or above) for non-board programs.");
      }
    } else {
      alert("Please enter a valid GWA between 75 and 99.");
    }
  }
}
function updateApplicantName() {
  // Get values from the input fields
  var lastName = document.getElementById("last_name").value;
  var firstName = document.getElementById("first_name").value;
  var middleName = document.getElementById("middle_name").value;

  // Concatenate the values to form the full name
  var fullName = lastName + ', ' + firstName + ' ' + middleName;

  // Set the full name in the applicant name input field
  document.getElementById("applicant_name").value = fullName;
}

function calculateAge() {
  // Get the birthdate value from the input field
  var birthdate = document.getElementById("birthdate").value;

  // Calculate the age based on the birthdate
  var today = new Date();
  var birthDate = new Date(birthdate);
  var age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has occurred this year
  var isBirthdayPassed = today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

  // Adjust age if birthday hasn't occurred yet
  if (!isBirthdayPassed) {
    age--;
  }
  // Set the calculated age in the age input field
  document.getElementById("age").value = age;
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the entered email matches the regular expression
  if (emailRegex.test(emailInput.value)) {
    emailError.textContent = ""; // Clear error message
  } else {
    emailError.textContent = "Please enter a valid email address.";
  }
}
function validatePhoneNumber(inputId) {
  var phoneNumberInput = document.getElementById(inputId);
  var phoneNumberError = document.getElementById(inputId + "-error");
  var phoneNumberRegex = /^(09\d{9}|0\d{10})$/;

  // Check if the entered phone number matches the regular expression
  if (phoneNumberRegex.test(phoneNumberInput.value)) {
    phoneNumberError.textContent = ""; // Clear error message
  } else {
    phoneNumberError.textContent = "Please enter a valid Philippine phone number.";
  }
}
document.addEventListener("DOMContentLoaded", function() {
  // Get the current date
  var currentDate = new Date();

  // Format the date as "YYYY-MM-DD" (required format for input type="date")
  var formattedDate = currentDate.toISOString().split('T')[0];

  // Set the formatted date as the value of the input field
  document.getElementById("application_date").value = formattedDate;
});

// Handle clicking the image preview to change the image
document.getElementById('id_picture_preview_container').addEventListener('click', function () {
  document.getElementById('id_picture').click();
});

// Handle the file input change event
document.getElementById('id_picture').addEventListener('change', function (e) {
  const fileInput = e.target;
  const imagePreview = document.getElementById('id_picture_preview_img');
  const uploadInstructions = document.getElementById('upload-instructions');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];

    // Check if the file size exceeds 5MB
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSizeInBytes) {
      alert("Please upload a picture with a size less than 5MB.");
      // Optionally, you may want to clear the file input or take other actions
      fileInput.value = ''; // Clear the file input
      return false;
    }
    // Display the selected file as the image preview
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;

      // Hide the upload instructions
      uploadInstructions.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});


// Initialize the Signature Pad
var signaturePad = new SignaturePad(document.querySelector("#signature-pad canvas"));
//  handle the second signature
var applicantSignaturePad = new SignaturePad(document.querySelector("#applicant-signature-pad canvas"));

// Clear the e-signature without reloading the page
document.getElementById("clear-signature").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  signaturePad.clear();
});
// Clear the applicant's e-signature without reloading the page
document.getElementById("clear-applicant-signature").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  applicantSignaturePad.clear();
});



// Function to submit the form with both e-signatures
function submitForm() {
  var userSignatureData = signaturePad.toDataURL(); // Get the user's e-signature as data URL
  var applicantSignatureData = applicantSignaturePad.toDataURL(); // Get the applicant's e-signature as data URL

  // You can send the signature data to the server or handle it as needed
  // For demonstration, we'll log it to the console
  console.log("User's E-Signature Data: ", userSignatureData);
  console.log("Applicant's E-Signature Data: ", applicantSignatureData);
  alert("Form submitted with e-signatures. Check the console for the e-signature data.");
}


function generateApplicantNumber() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Get the current month (1-12) and pad with 0 if needed
  const day = String(now.getDate()).padStart(2, '0'); // Get the current day (1-31) and pad with 0 if needed

  // In a real scenario, you would replace this part with your logic to get the applicant's sequence number.
  // For this example, let's generate a random number between 1 and 9999.
  const sequenceNumber = Math.floor(Math.random() * 9999) + 1;

  const applicantNumber = `${month}-${day}-${sequenceNumber.toString().padStart(4, '0')}`;
  document.getElementById("applicant_number").value = applicantNumber;
}

// Call this function to generate the applicant number when needed.
generateApplicantNumber();


function handleForm(event) {
  event.preventDefault();

  // Retrieve and store all form data in localStorage
  const lastName = document.getElementById('last_name').value;
  const firstName = document.getElementById('first_name').value;
  const middleName = document.getElementById('middle_name').value;
  const gender = document.getElementById('gender').value;
  const birthdate = document.getElementById('birthdate').value;
  const city = document.getElementById('birthplace-municipality').value;
  const birthprovince = document.getElementById('birthplace-province').value;
  const country = document.getElementById('birthplace_country').value;
  const age = document.getElementById('age').value;
  const civilStatus = document.getElementById('civil_status').value;
  const citizenship = document.getElementById('citizenship').value;
  const nationality = document.getElementById('nationality').value;
  const houseStreet = document.getElementById('house_street').value;
  const barangaySubdivision = document.getElementById('barangay_subdivision').value;
  const municipalityCity = document.getElementById('municipality_city').value;
  const province = document.getElementById('province').value;
  const countryState = document.getElementById('country_state').value;
  const zipCode = document.getElementById('zip_code').value;
  const phone = document.getElementById('phone').value;
  const facebook = document.getElementById('facebook').value;
  const email = document.getElementById('email').value;
  const contactPersonName = document.getElementById('contact_person_1').value;
  const contactPersonMobile = document.getElementById('contact_person_1_mobile').value;
  const relationship = document.getElementById('relationship_1').value;
  const contactPerson2Name = document.getElementById('contact_person_2').value;
  const contactPerson2Mobile = document.getElementById('contact_person_2_mobile').value;
  const relationship2 = document.getElementById('relationship_2').value;
  const academicClassification = document.getElementById('academic_classification').value;
  const highSchoolAddress = document.getElementById('high_school_name_address').value;
  const alsPeptAddress = document.getElementById('als_pept_name_address').value;
  const collegeAddress = document.getElementById('college_name_address').value;
  const lrn = document.getElementById('lrn').value;
  const degreeApplied = document.getElementById('degree_applied').value;

  const natureOfDegree = document.getElementById('nature_of_degree').value;
  const canvas = document.querySelector('#signature-pad canvas');
  const signatureData = canvas.toDataURL();
  const applicantCanvas = document.querySelector('#applicant-signature-pad canvas');
  const applicantSignatureData = applicantCanvas.toDataURL();
  const applicantname = document.getElementById('applicant_name').value;
  const degreeProgramApplied = document.getElementById('slip_degree').value;


  // Store data in localStorage
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('middleName', middleName);
  localStorage.setItem('gender', gender);
  localStorage.setItem('birthdate', birthdate);
  localStorage.setItem('city', city);
  localStorage.setItem('birthprovince', birthprovince);
  localStorage.setItem('country', country);
  localStorage.setItem('age', age);
  localStorage.setItem('civilStatus', civilStatus);
  localStorage.setItem('citizenship', citizenship);
  localStorage.setItem('nationality', nationality);
  localStorage.setItem('houseStreet', houseStreet);
  localStorage.setItem('barangaySubdivision', barangaySubdivision);
  localStorage.setItem('municipalityCity', municipalityCity);
  localStorage.setItem('province', province);
  localStorage.setItem('countryState', countryState);
  localStorage.setItem('zipCode', zipCode);
  localStorage.setItem('phone', phone);
  localStorage.setItem('facebook', facebook);
  localStorage.setItem('email', email);
  localStorage.setItem('contact_person_1', contactPersonName);
  localStorage.setItem('contact_person_1_mobile', contactPersonMobile);
  localStorage.setItem('relationship_1', relationship);
  localStorage.setItem('contact_person_1', contactPersonName);
  localStorage.setItem('contact_person_1_mobile', contactPersonMobile);
  localStorage.setItem('relationship_1', relationship);
  localStorage.setItem('contact_person_2', contactPerson2Name);
  localStorage.setItem('contact_person_2_mobile', contactPerson2Mobile);
  localStorage.setItem('relationship_2', relationship2);
  localStorage.setItem('academicClassification', academicClassification);
  localStorage.setItem('highSchoolAddress', highSchoolAddress);
  localStorage.setItem('alsPeptAddress', alsPeptAddress);
  localStorage.setItem('collegeAddress', collegeAddress);
  localStorage.setItem('lrn', lrn);
  localStorage.setItem('degreeApplied', degreeApplied);

  localStorage.setItem('natureOfDegree', natureOfDegree);
  localStorage.setItem('signature', signatureData);
  localStorage.setItem('applicantSignature', applicantSignatureData);
  localStorage.setItem('applicantname', applicantname);
  localStorage.setItem('degreeProgramApplied', degreeProgramApplied);


  const fileInput = document.getElementById('id_picture');
  if (fileInput.files.length > 0) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const idPictureData = e.target.result;
      localStorage.setItem('id_picture', idPictureData);

      // Redirect to the result page
      window.location.href = 'student.html';
    };

    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // If no ID picture uploaded, still redirect to the result page
    window.location.href = 'student.html';
  }
}

