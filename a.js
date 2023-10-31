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
        y = $(x).find("input");

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
    $("input").css("background", "#fff");
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


