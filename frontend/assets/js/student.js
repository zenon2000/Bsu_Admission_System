const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});



// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const dropdownContent = toggle.nextElementSibling;
            const chevronIcon = toggle.querySelector('.bx-chevron-down');

            // Toggle the visibility of the dropdown content
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
                chevronIcon.style.transform = 'rotate(0deg)';
            } else {
                dropdownContent.style.display = 'block';
                chevronIcon.style.transform = 'rotate(180deg)';
            }
        });
    });
});



//search bar

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})




if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})



//side bar
document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('#courses-dropdown .dropdown-content li a');

    dropdownItems.forEach(function (item) {
        const fullText = item.getAttribute('data-fulltext');
        const abbreviation = item.querySelector('.text');

        // Save the original abbreviation
        const originalAbbreviation = abbreviation.textContent;

        item.addEventListener('mouseover', function () {
            // Apply a smaller font size and show the full text on two lines when hovering
            abbreviation.style.fontSize = '12px';
            abbreviation.style.whiteSpace = 'normal'; // Allow multiple lines
            abbreviation.textContent = fullText;
        });

        item.addEventListener('mouseout', function () {
            // Restore the original state when not hovering
            abbreviation.style.fontSize = ''; // Empty string resets to the default size
            abbreviation.style.whiteSpace = 'nowrap'; // Display on one line
            abbreviation.textContent = originalAbbreviation;
        });
    });
});

//side bar


//clock
// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();
//clock

$(document).ready(function () {
    $("#settings").click(function () {
        $("#settings-dropdown").toggle();
        $("#help-dropdown").hide(); // Hide the other dropdown
        $("#profile-content").toggleClass("soft-transition");
    });

    $("#help").click(function () {
        $("#help-dropdown").toggle();
        $("#settings-dropdown").hide(); // Hide the other dropdown
        $("#profile-content").toggleClass("soft-transition");
    });
});

function openPopup(popupId) {
    closeAllPopups();
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none';
    }
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {

    const profileButton = document.querySelector("#profile-button");
    const profilePopup = document.querySelector("#profile-popup");



    // Toggle the display of the profile popup when the button is clicked
    profileButton.addEventListener("click", function () {
        // Toggle the visibility of the profile popup
        profilePopup.style.display = profilePopup.style.display === "block" ? "none" : "block";
    });

    // Close the profile popup when the user clicks outside the popup
    document.addEventListener("click", function (event) {
        if (!profileButton.contains(event.target) && !profilePopup.contains(event.target)) {
            profilePopup.style.display = "none";
        }
    });
});

//pressing available slot
document.addEventListener('DOMContentLoaded', function () {
    // Get the "Available Slots" icon and the "Available Slot" content
    const availableBox = document.getElementById('available-box');
    const availableSlot = document.getElementById('available-slot');

    // Add a click event listener to the "Available Slots" icon
    availableBox.addEventListener('click', function () {
        // Toggle the visibility of the "Available Slot" content
        if (availableSlot.style.display === 'none' || availableSlot.style.display === '') {
            availableSlot.style.display = 'block';
        } else {
            availableSlot.style.display = 'none';
        }
    });
});



//pressing Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const dashboardLink = document.getElementById('profile-link');
    const dashboardContent = document.getElementById('student-profile-content');
    const StudentProfileLink = document.getElementById('student-profile-link');
    const StudentProfileContent = document.getElementById('dashboard-content');
    const StudentResultLink = document.getElementById('student-result-link');
    const StudentResultContent = document.getElementById('student-result-content');

    // Initially hide the content divs by default
    dashboardContent.style.display = 'block';
    StudentProfileContent.style.display = 'none';
    StudentResultContent.style.display = 'none';


    // Add event listeners to the links
    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'block';
        StudentProfileContent.style.display = 'none';
        StudentResultContent.style.display = 'none';

    });

    StudentProfileLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        StudentProfileContent.style.display = 'block';
        StudentResultContent.style.display = 'none';


    });

    StudentResultLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        StudentProfileContent.style.display = 'none';
        StudentResultContent.style.display = 'block';

    });


});





document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage and display it in the result page
    const lastName = localStorage.getItem('lastName');
    const firstName = localStorage.getItem('firstName');
    const middleName = localStorage.getItem('middleName');
    const name = `${firstName} ${middleName} ${lastName}`;
    const uppercaseName = `${lastName.toUpperCase()}, ${firstName.toUpperCase()} ${middleName.toUpperCase()}`;

    const gender = localStorage.getItem('gender');
    const birthdate = localStorage.getItem('birthdate');
    const city = localStorage.getItem('city');
    const birthprovince = localStorage.getItem('birthprovince'); // Updated variable name
    const country = localStorage.getItem('country');
    const age = localStorage.getItem('age');
    const civilStatus = localStorage.getItem('civilStatus');
    const citizenship = localStorage.getItem('citizenship');
    const nationality = localStorage.getItem('nationality');
    const street = localStorage.getItem('houseStreet');
    const barangay = localStorage.getItem('barangaySubdivision');
    const municipality = localStorage.getItem('municipalityCity');
    const province = localStorage.getItem('province');
    const countryState = localStorage.getItem('countryState'); // Updated variable name
    const zipCode = localStorage.getItem('zipCode');
    const telephone = localStorage.getItem('phone');
    const facebook = localStorage.getItem('facebook');
    const email = localStorage.getItem('email');
    const contactPersonName = localStorage.getItem('contact_person_1');
    const contactPersonMobile = localStorage.getItem('contact_person_1_mobile');
    const relationship = localStorage.getItem('relationship_1');
    // Update the DOM elements for Contact Person 1
    if (contactPersonName && contactPersonMobile && relationship) {
        document.getElementById('result-ContactOne').textContent = contactPersonName;
        document.getElementById('result-NumberOne').textContent = contactPersonMobile;
        document.getElementById('result-RelationshipOne').textContent = relationship;
    } else {
        // Handle case where data is not available in localStorage
        console.log('Emergency contact person details not found in localStorage');
    }

    const contactPerson2Name = localStorage.getItem('contact_person_2');
    const contactPerson2Mobile = localStorage.getItem('contact_person_2_mobile');
    const relationship2 = localStorage.getItem('relationship_2');

    if (contactPerson2Name && contactPerson2Mobile && relationship2) {
        document.getElementById('result-ContactTwo').textContent = contactPerson2Name;
        document.getElementById('result-NumberTwo').textContent = contactPerson2Mobile;
        document.getElementById('result-RelationshipTwo').textContent = relationship2;
    } else {
        console.log('Emergency contact person 2 details not found in localStorage');
    }
    const academicClassification = localStorage.getItem('academicClassification');
    const highSchoolAddress = localStorage.getItem('highSchoolAddress');
    const alsPeptAddress = localStorage.getItem('alsPeptAddress');
    const collegeAddress = localStorage.getItem('collegeAddress');
    const lrn = localStorage.getItem('lrn');
    const degreeApplied = localStorage.getItem('degreeApplied');
    const major = localStorage.getItem('major');
    const natureOfDegree = localStorage.getItem('natureOfDegree');
    const applicantname = localStorage.getItem('applicantname');
    const degreeProgramApplied = localStorage.getItem('degreeProgramApplied');

    // Display the retrieved data on the result page

    document.getElementById('result-LastName').textContent = lastName;
    document.getElementById('result-FirstName').textContent = firstName;
    document.getElementById('result-MiddleName').textContent = middleName;
    document.getElementById('result-Gender').textContent = gender;
    document.getElementById('result-Birthdate').textContent = birthdate;
    document.getElementById('result-City').textContent = city;
    document.getElementById('result-BirthProvince').textContent = birthprovince;
    document.getElementById('result-BirthCountry').textContent = country;
    document.getElementById('result-Age').textContent = age;
    document.getElementById('result-Civil').textContent = civilStatus;
    document.getElementById('result-Citizenship').textContent = citizenship;
    document.getElementById('result-Nationality').textContent = nationality;
    document.getElementById('result-Street').textContent = street;
    document.getElementById('result-Barangay').textContent = barangay;
    document.getElementById('result-Municipality').textContent = municipality;
    document.getElementById('result-PermanentProvince').textContent = province;
    document.getElementById('result-PermanentCountry').textContent = countryState;
    document.getElementById('result-ZipCode').textContent = zipCode;
    document.getElementById('result-Telephone').textContent = telephone;
    document.getElementById('result-Facebook').textContent = facebook;
    document.getElementById('result-Email').textContent = email;
    document.getElementById('result-classification').textContent = academicClassification;
    document.getElementById('high_school_name_address').textContent = highSchoolAddress;
    document.getElementById('result-ALS').textContent = alsPeptAddress;
    document.getElementById('college_name_address').textContent = collegeAddress;
    document.getElementById('result-LRN').textContent = lrn;
    document.getElementById('result-Degree').textContent = degreeApplied;
    document.getElementById('result-major').textContent = major;
    document.getElementById('result-natureDegree').textContent = natureOfDegree;
    const profileNameElement = document.querySelector('.profile-name');
    profileNameElement.textContent = name;
    const signNameElement = document.querySelector('.sign-name');
    signNameElement.textContent = uppercaseName;
    const resultApplicantName = document.getElementById('result-ApplicantName');
    resultApplicantName.textContent = applicantname;
    const degreeProgramAppliedElement = document.getElementById('result-Program');
    degreeProgramAppliedElement.textContent = degreeProgramApplied;
    // Retrieve and display the ID picture if available
    const idPicture = localStorage.getItem('id_picture');

    if (idPicture) {
        // Create the image elements
        const img1 = document.createElement('img');
        img1.src = idPicture;

        const img2 = document.createElement('img');
        img2.src = idPicture;

        const img3 = document.createElement('img');
        img3.src = idPicture;

        const img4 = document.createElement('img');
        img4.src = idPicture;


        // Append the first image to 'result-id-picture'
        document.getElementById('result-id-picture').appendChild(img1);

        // Replace the image source inside the 'profile-button' anchor tag
        const profileImage = document.getElementById('profile-image');
        profileImage.src = idPicture;

        // Replace the existing 'profile-button' image with img2
        profileImage.parentNode.replaceChild(img2, profileImage);

        // Replace the 'profile-picture' image with img3
        const profilePicture = document.getElementById('profile-picture');
        profilePicture.parentNode.replaceChild(img3, profilePicture);

        // Append img4 to the 'StudentResult-picture' 
        const studentResultPicture = document.getElementById('StudentResult-picture');
        studentResultPicture.appendChild(img4);
    } else {
        console.log('ID picture not found in localStorage');
    }




    // Retrieve and display the student's signature
    const signature = localStorage.getItem('signature');
    if (signature) {
        const img = document.createElement('img');
        img.src = signature;
        img.style.width = '200px'; // Adjust the size as needed
        document.getElementById('result-signature').appendChild(img);
    } else {
        console.log('E-Signature not found in localStorage');
    }

    // Retrieve and display the applicant's signature
    const applicantSignature = localStorage.getItem('applicantSignature');
    if (applicantSignature) {
        const img = document.createElement('img');
        img.src = applicantSignature;
        img.style.width = '200px'; // Adjust the size as needed
        document.getElementById('result-signature-slip').appendChild(img);
    } else {
        console.log("Applicant's E-Signature not found in localStorage");
    }

    // Add an event listener to the download button
    const downloadButton = document.querySelector('.btn-download');
    downloadButton.addEventListener('click', downloadFormData);

    // Function to create and download a PDF file with the form data
    function downloadFormData() {
        // Create a div element with the form data content
        const formDataDiv = document.createElement('div');
        formDataDiv.innerHTML = `
    
        <!-- Display ID picture -->
        <p><strong>ID Picture:</strong></p>
        <img src="${localStorage.getItem('id_picture')}" style="max-width: 100px; height: auto;"/>

        <h1>Student Form Data</h1>
        <p><strong>Name:</strong> ${lastName}, ${firstName} ${middleName}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Birth Province:</strong> ${birthprovince}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Civil Status:</strong> ${civilStatus}</p>
        <p><strong>Citizenship:</strong> ${citizenship}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Street:</strong> ${street}</p>
        <p><strong>Barangay:</strong> ${barangay}</p>
        <p><strong>Municipality:</strong> ${municipality}</p>
        <p><strong>Permanent Province:</strong> ${province}</p>
        <p><strong>Permanent Country:</strong> ${countryState}</p>
        <p><strong>Zip Code:</strong> ${zipCode}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Facebook:</strong> ${facebook}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Person 1:</strong> ${contactPersonName}, <strong>Mobile:</strong> ${contactPersonMobile}, <strong>Relationship:</strong> ${relationship}</p>
        <p><strong>Contact Person 2:</strong> ${contactPerson2Name}, <strong>Mobile:</strong> ${contactPerson2Mobile}, <strong>Relationship:</strong> ${relationship2}</p>
        <p><strong>Academic Classification:</strong> ${academicClassification}</p>
        <p><strong>High School Address:</strong> ${highSchoolAddress}</p>
        <p><strong>ALS/PEPT Address:</strong> ${alsPeptAddress}</p>
        <p><strong>College/University Address:</strong> ${collegeAddress}</p>
        <p><strong>LRN:</strong> ${lrn}</p>
        <p><strong>Degree Applied:</strong> ${degreeApplied}</p>
        <p><strong>Major:</strong> ${major}</p>
        <p><strong>Nature of Degree:</strong> ${natureOfDegree}</p>
        <p><strong>Applicant Name:</strong> ${applicantname}</p>
        <p><strong>Degree Program Applied:</strong> ${degreeProgramApplied}</p>

        <!-- Display Signatures -->
        <p><strong>Student's Signature:</strong></p>
        <img src="${localStorage.getItem('signature')}" style="max-width: 100%; height: auto;"/>
        
        <p><strong>Applicant's Signature:</strong></p>
        <img src="${localStorage.getItem('applicantSignature')}" style="max-width: 100%; height: auto;"/>
    `;

        // Convert the div content to a PDF
        html2pdf(formDataDiv, {
            margin: 10,
            filename: 'student_form_data.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        });
    }
});


