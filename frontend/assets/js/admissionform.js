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
            // Validate the checkbox in Tab 1
            if (!document.getElementById("read-guidelines").checked) {
                alert("Please check the box to confirm that you have read the guidelines.");
                return false;
            }
        } else if (hideTab === 2) {
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
        } else if (hideTab === 3) {
            // Validating the applicant's e-signature in Tab 3
            if (applicantSignaturePad.isEmpty()) {
                alert("Please provide the applicant's e-signature.");
                return false;
            }
        }

        for (i = 0; i < y.length; i++) {
            if (y[i].value === "") {
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
}

// Handle the file input label click
$('label[for="id_picture"]').click(function () {
    $('input[name="id_picture"]').click();
});

// Display the selected file name
$('input[name="id_picture"]').change(function () {
    var fileName = $(this).val().split("\\").pop();
    $('label[for="id_picture"]').text(fileName);
});


    function updateSelection() {
        var categoryDropdown = document.getElementById("categoryDropdown");
        var boardFields = document.getElementById("boardFields");
        var nonBoardField = document.getElementById("nonBoardField");
  
        if (categoryDropdown.value === "Board") {
          boardFields.classList.remove("programFields");
          nonBoardField.classList.add("programFields");
        } else if (categoryDropdown.value === "Non-board") {
          boardFields.classList.add("programFields");
          nonBoardField.classList.remove("programFields");
        }
      }
  
      function calculateGWA() {
        var englishGrade = parseFloat(document.getElementById("englishGrade").value);
        var mathGrade = parseFloat(document.getElementById("mathGrade").value);
        var scienceGrade = parseFloat(document.getElementById("scienceGrade").value);
  
     
  
        // Calculate GWA (you can adjust the weights as needed)
        var gwa = (englishGrade + mathGrade + scienceGrade) / 3;
  
        // Display the result
        var gwaResultElement = document.getElementById("gwaResult");
        gwaResultElement.textContent = "Your General Weighted Average (GWA) is: " + gwa.toFixed(2);
  
        // Check if GWA is 86% or higher to show board programs dropdown
        if (gwa >= 86) {
          var boardProgramsDropdown = document.getElementById("boardProgramsDropdown");
          boardProgramsDropdown.classList.remove("programFields");
        } else {
          alert("You didn't pass the qualified GWA requirement for Board Programs.");
        }
      }
  
      function submitNonBoardForm() {
        displayNonBoardGWA();
      }
      
      function displayNonBoardGWA() {
        var gwaGrade = parseFloat(document.getElementById("gwaGrade").value);
      
        if (isNaN(gwaGrade)) {
          alert("Please enter a valid GWA grade.");
          return;
        }
      
        // Display the provided Non-Board GWA
        var nonBoardGwaResultElement = document.getElementById("nonBoardGwaResult");
        nonBoardGwaResultElement.textContent = "Your General Weighted Average (GWA) is: " + gwaGrade.toFixed(2);
      
        // Check if GWA is 80 or higher to show non-board programs dropdown
        if (gwaGrade >= 80) {
          var nonBoardProgramsDropdown = document.getElementById("nonBoardProgramsDropdown");
          nonBoardProgramsDropdown.classList.remove("programFields");
        } else {
          alert("You didn't pass the qualified GWA requirement for Non-Board Programs.");
        }
      }
      
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
    const major = document.getElementById('major').value;
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
    localStorage.setItem('major', major);
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

