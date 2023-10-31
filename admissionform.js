
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
 

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

const academicClassificationSelect = document.getElementById("academic_classification");
const pictureSubmissionsDiv = document.getElementById("picture_submissions");

academicClassificationSelect.addEventListener("change", function () {
    if (academicClassificationSelect.value === "grade_12") {
        pictureSubmissionsDiv.style.display = "block";
    } else {
        pictureSubmissionsDiv.style.display = "none";
    }
});

const profilePictureInput = document.getElementById("profile_picture");
const displayPicture = document.getElementById("display_picture");
const textPlaceholder = document.querySelector(".text-placeholder");
profilePictureInput.addEventListener("change", function () {
    const file = profilePictureInput.files[0];

    if (file) {
        // Check file size (in bytes)
        if (file.size > 25 * 1024 * 1024) { // 25MB
            alert("Please select an image smaller than 25MB.");
            profilePictureInput.value = ''; // Clear the input field
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // Check image dimensions
                if (img.width < 600 || img.width > 610 || img.height < 600 || img.height > 610) {
                    alert("Please select only a 2x2 ID.");
                    profilePictureInput.value = ''; // Clear the input field
                } else {
                    displayPicture.src = e.target.result;
                    textPlaceholder.style.display = "none";
                }
            };
        };

        reader.readAsDataURL(file);
    } else {
        displayPicture.src = "";
        textPlaceholder.style.display = "block";
    }
});


// Get the cloud download button element
const cloudDownloadButton = document.getElementById("signature-submit-button");

// Add a click event listener to handle file download
cloudDownloadButton.addEventListener("click", function () {
    // Trigger a click on the hidden file input element
    const signatureImageInput = document.getElementById("signature_image");
    signatureImageInput.click();
});

// Get the signature image input element
const signatureImageInput = document.getElementById('signature_image');

// Get the signature image preview element
const signatureImagePreview = document.getElementById('signature-preview');

// Add an event listener to the input element
signatureImageInput.addEventListener('change', function () {
    const file = signatureImageInput.files[0];

    // Check if a file was selected
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // Set the source of the img tag to the selected image
            signatureImagePreview.src = e.target.result;
        };

        // Read the image as a data URL
        reader.readAsDataURL(file);
    }
});

function checkFileSize(input) {
        if (input.files.length > 0) {
            const fileSize = input.files[0].size; // Size in bytes
            const maxSize = 25 * 1024 * 1024; // 25MB in bytes

            if (fileSize > maxSize) {
                alert("File size exceeds 25MB. Please select a smaller file.");
                input.value = ''; // Clear the input field
            }
        }
    }


//pressing done
const doneButton = document.getElementById("doneButton");

// Add an event listener to the "Done" button
doneButton.addEventListener("click", function() {
    // Redirect to the "student.html" page
    window.location.href = "student.html";
});

function validateForm() {
    var name = document.getElementById("profile_picture").value;
    var email = document.getElementById("last_name").value;
    var phone = document.getElementById("first_name").value;
    var error = document.getElementById("error");

    if (name === "" || email === "" || phone === "") {
        error.innerHTML = "All fields are required!";
        return false;
    }

    // Additional validation can be added here, e.g., email format, phone number format.

    return true;
}