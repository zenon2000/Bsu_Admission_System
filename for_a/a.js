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
                y[i].placeholder = "Please fill up the field";
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


//Handle Submit
function handleSubmit () {

    //ID Picture
    const idpicture = document.getElementById('id_picture_preview_img').value;
    //Fullname
    const firstname = document.getElementById('first_name').value;
    const middlename = document.getElementById('middle_name').value;
    const lastname = document.getElementById('last_name').value;
    //Gender
    const gender = document.getElementById('gender').value;
    //Birth Details
    const birthdate = document.getElementById('birthdate').value;
    const birthplacemunicipality = document.getElementById('birthplace_municipality').value;
    const birthplaceprovince = document.getElementById('birthplace_province').value;
    const birthplacecountry = document.getElementById('birthplace_country').value;
    //Age
    const age = document.getElementById('age').value;
    //Civil Status
    const civilstatus = document.getElementById('civil_status').value;
    //Citizenship
    const citizenship = document.getElementById('citizenship').value;
    //Nationality
    const nationality = document.getElementById('nationality').value;
    //Home Address
    const housestreet = document.getElementById('house_street').value;
    const barangay_subdivision = document.getElementById('barangay_subdivision').value;
    const municipality_city = document.getElementById('municipality_city').value;
    const province = document.getElementById('province').value;
    const countrystate = document.getElementById('country_state').value;
    const zipcode = document.getElementById('zip_code').value;
    //Contact information
    const phone = document.getElementById('phone').value;
    const facebook = document.getElementById('facebook').value;
    const email = document.getElementById('email').value;
    //In Case of Emergency
    const contact_person_1 = document.getElementById('contact_person_1').value;
    const contact_person_1_mobile = document.getElementById('contact_person_1_mobile').value;
    const relationship_1 = document.getElementById('relationship_1').value;
    const contact_person_2 = document.getElementById('contact_person_2').value;
    const contact_person_2_mobile = document.getElementById('contact_person_2_mobile').value;
    const relationship_2 = document.getElementById('relationship_2').value;
    //Educational background
    const academic_classification = document.getElementById('academic_classification').value;
    const high_school_name_address = document.getElementById('high_school_name_address').value;
    const als_pept_name_address = document.getElementById('als_pept_name_address').value;
    const college_name_address = document.getElementById('college_name_address').value;
    //LRN
    const lrn = document.getElementById('lrn').value;
    //Course Applying For
    const degree_applied = document.getElementById('degree_applied').value;
    const nature_of_degree = document.getElementById('nature_of_degree').value;
    //E-signature
    const E_Signature = document.getElementById('signature-pad').value;

    // to set into local storage
    localStorage.setItem("IDPICTURE", idpicture);
    localStorage.setItem("FIRSTNAME", firstname);
    localStorage.setItem("MIDDLENAME", middlename);
    localStorage.setItem("LASTNAME", lastname);
    localStorage.setItem("GENDER", gender);
    localStorage.setItem("BIRTHDATE", birthdate);
    localStorage.setItem("BIRTHPLACE_MUNICIPALITY", birthplacemunicipality);
    localStorage.setItem("BIRHTPLACE_PROVINCE", birthplaceprovince);
    localStorage.setItem("BIRHTPLACE_COUNTRY", birthplacecountry);
    localStorage.setItem("AGE", age);
    localStorage.setItem("CIVIL_STATUS", civilstatus);
    localStorage.setItem("CITIZENSHIP", citizenship);
    localStorage.setItem("NATIONALITY", nationality);
    localStorage.setItem("HOUSE_STREET", housestreet);
    localStorage.setItem("BARANGAY_SUBDIVISION", barangay_subdivision);
    localStorage.setItem("MUNICIPALITY_CITY", municipality_city);
    localStorage.setItem("PROVINCE", province);
    localStorage.setItem("COUNTRY_STATE", countrystate);
    localStorage.setItem("ZIPCODE", zipcode);
    localStorage.setItem("PHONE", phone);
    localStorage.setItem("FACEBOOK", facebook);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("CONTACT_PERSON_1", contact_person_1);
    localStorage.setItem("CONTACT_PERSON_1_MOBILE", contact_person_1_mobile);
    localStorage.setItem("RELATIONSHIP_1", relationship_1);
    localStorage.setItem("CONTACT_PERSON_2", contact_person_2);
    localStorage.setItem("CONTACT_PERSON_2_MOBILE", contact_person_2_mobile);
    localStorage.setItem("RELATIONSHIP_2", relationship_2);
    localStorage.setItem("ACADEMIC_CLASSIFICATION", academic_classification);
    localStorage.setItem("HIGH_SCHOOL_NAME_ADDRESS", high_school_name_address);
    localStorage.setItem("ALS_PEPT_NAME_ADDRESS", als_pept_name_address);
    localStorage.setItem("COLLEGE_NAME_ADDRESS", college_name_address);
    localStorage.setItem("LRN", lrn);
    localStorage.setItem("DEGREE_APPLIED", degree_applied);
    localStorage.setItem("NATURE_OF_DEGREE", nature_of_degree);
    localStorage.setItem("ESIGNATURE", E_Signature);

    return;
}