const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
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
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})




if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
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



document.addEventListener("DOMContentLoaded", function () {
    const notificationButton = document.querySelector("#notification-button");
    const notificationPopup = document.querySelector("#notification-popup");
    const profileButton = document.querySelector("#profile-button");
    const profilePopup = document.querySelector("#profile-popup");

    // Toggle the display of the notification popup when the button is clicked
    notificationButton.addEventListener("click", function () {
        // Toggle the visibility of the notification popup
        notificationPopup.style.display = notificationPopup.style.display === "block" ? "none" : "block";
    });

    // Close the notification popup when the user clicks outside the popup
    document.addEventListener("click", function (event) {
        if (!notificationButton.contains(event.target) && !notificationPopup.contains(event.target)) {
            notificationPopup.style.display = "none";
        }
    });

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

//result Local Storage
window.addEventListener('load', () => {

    //ID Picture
    const idpicture = localStorage.getItem('IDPICTURE');
    //Fullname
    const firstname = localStorage.getItem('FIRSTNAME');
    const middlename = localStorage.getItem('MIDDLENAME');
    const lastname = localStorage.getItem('LASTNAME');
    //Gender
    const gender = localStorage.getItem('GENDER');
     //Birth Details
    const birthdate = localStorage.getItem('BIRTHDATE');
    const birthplacemunicipality = localStorage.getItem('BIRTHPLACE_MUNICIPALITY');
    const birthplaceprovince = localStorage.getItem('BIRHTPLACE_PROVINCE');
    const birthplacecountry = localStorage.getItem('BIRHTPLACE_COUNTRY');
    //Age
    const age = localStorage.getItem('AGE');
    //Civil Status
    const civilstatus = localStorage.getItem('CIVIL_STATUS');
    //Citizenship
    const citizenship = localStorage.getItem('CITIZENSHIP');
    //Nationality
    const nationality = localStorage.getItem('NATIONALITY');
    //Home Address
    const housestreet = localStorage.getItem('HOUSE_STREET');
    const barangay_subdivision = localStorage.getItem('BARANGAY_SUBDIVISION');
    const municipality_city = localStorage.getItem('MUNICIPALITY_CITY');
    const province = localStorage.getItem('PROVINCE');
    const countrystate = localStorage.getItem('COUNTRY_STATE');
    const zipcode = localStorage.getItem('ZIPCODE');
    //Contact information
    const phone = localStorage.getItem('PHONE');
    const facebook = localStorage.getItem('FACEBOOK');
    const email = localStorage.getItem('EMAIL');
    //In Case of Emergency
    const contact_person_1 = localStorage.getItem('CONTACT_PERSON_1');
    const contact_person_1_mobile = localStorage.getItem('CONTACT_PERSON_1_MOBILE');
    const relationship_1 = localStorage.getItem('RELATIONSHIP_1');
    const contact_person_2 = localStorage.getItem('CONTACT_PERSON_2');
    const contact_person_2_mobile = localStorage.getItem('CONTACT_PERSON_2_MOBILE');
    const relationship_2 = localStorage.getItem('RELATIONSHIP_2');
    //Educational background
    const academic_classification = localStorage.getItem('ACADEMIC_CLASSIFICATION');
    const high_school_name_address = localStorage.getItem('HIGH_SCHOOL_NAME_ADDRESS');
    const als_pept_name_address = localStorage.getItem('ALS_PEPT_NAME_ADDRESS');
    const college_name_address = localStorage.getItem('COLLEGE_NAME_ADDRESS');
     //LRN
    const lrn = localStorage.getItem('LRN');
    //Course Applying For
    const degree_applied = localStorage.getItem('DEGREE_APPLIED');
    const major = localStorage.getItem('MAJOR');
    const nature_of_degree = localStorage.getItem('NATURE_OF_DEGREE');
    //Signature
    const E_Signature = localStorage.getItem('E_Signature');

    document.getElementById('result-id-picture').innerHTML = idpicture;
    document.getElementById('result-FirstName').innerHTML = firstname;
    document.getElementById('result-MiddleName').innerHTML = middlename;
    document.getElementById('result-LastName').innerHTML = lastname;
    document.getElementById('result-Gender').innerHTML = gender;
    document.getElementById('result-Girthdate').innerHTML = birthdate;
    document.getElementById('result-City').innerHTML = birthplacemunicipality;
    document.getElementById('result-Province').innerHTML = birthplaceprovince;
    document.getElementById('result-Country').innerHTML = birthplacecountry;
    document.getElementById('result-Age').innerHTML = age;
    document.getElementById('result-Civil').innerHTML = civilstatus;
    document.getElementById('result-Citizenship').innerHTML = citizenship;
    document.getElementById('result-Nationality').innerHTML = nationality;
    document.getElementById('result-Street').innerHTML = housestreet;
    document.getElementById('result-Barangay').innerHTML = barangay_subdivision;
    document.getElementById('result-Municipality').innerHTML = municipality_city;
    document.getElementById('result-Province').innerHTML = province;
    document.getElementById('result-Country').innerHTML = countrystate;
    document.getElementById('result-ZipCode').innerHTML = zipcode;
    document.getElementById('result-Telephone').innerHTML = phone;
    document.getElementById('result-Facebook').innerHTML = facebook;
    document.getElementById('result-Email').innerHTML = email;
    document.getElementById('result-ContactOne').innerHTML = contact_person_1;
    document.getElementById('result-NumberOne').innerHTML = contact_person_1_mobile;
    document.getElementById('result-RelationshipOne').innerHTML = relationship_1;
    document.getElementById('result-ContactTwo').innerHTML = contact_person_2;
    document.getElementById('result-NumberTwo').innerHTML = contact_person_2_mobile;
    document.getElementById('result-RelationshipTwo').innerHTML = relationship_2;
    document.getElementById('result-Academic_Classification').innerHTML = academic_classification;
    document.getElementById('result-high_school_name_address').innerHTML = high_school_name_address;
    document.getElementById('result-ALS').innerHTML = als_pept_name_address;
    document.getElementById('result-college_name_address').innerHTML = college_name_address;
    document.getElementById('result-LRN').innerHTML = lrn;
    document.getElementById('result-Degree').innerHTML = degree_applied;
    document.getElementById('result-Major').innerHTML = major;
    document.getElementById('result-natureDegree').innerHTML = nature_of_degree;
    document.getElementById('result-ESignature').innerHTML = E_Signature; 

})
