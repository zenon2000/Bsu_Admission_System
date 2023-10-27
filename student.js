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

//dropdown
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
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally

        const searchTerm = searchInput.value.trim();

        // Perform your search logic here
        if (searchTerm !== '') {
            alert('Performing search for: ' + searchTerm);
            // Add your search results handling logic here
        }
    });
});
//search bar


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

//search head in table




//pressing box-info
document.addEventListener('DOMContentLoaded', function () {
    const verifiedAppItem = document.getElementById('verified-application');
    const toBeReviewedItem = document.getElementById('to-be-reviewed');
    const resultsItem = document.getElementById('results-item');
    const facultyItem = document.getElementById('faculty-item');
    const verifiedTable = document.getElementById('verified');
    const reviewedTable = document.getElementById('reviewed');
    const resultsTable = document.getElementById('resultsT');
    const facultyTable = document.getElementById('faculty');

    // Hide all tables initially
    verifiedTable.style.display = 'none';
    reviewedTable.style.display = 'none';
    resultsTable.style.display = 'none';
    facultyTable.style.display = 'none';

    verifiedAppItem.addEventListener('click', function () {
        // Show the "Verified" table and hide others
        verifiedTable.style.display = 'block';
        reviewedTable.style.display = 'none';
        resultsTable.style.display = 'none';
        facultyTable.style.display = 'none';
    });

    toBeReviewedItem.addEventListener('click', function () {
        // Show the "To be reviewed" table and hide others
        reviewedTable.style.display = 'block';
        verifiedTable.style.display = 'none';
        resultsTable.style.display = 'none';
        facultyTable.style.display = 'none';
    });

    resultsItem.addEventListener('click', function () {
        // Show the "Results" table and hide others
        resultsTable.style.display = 'block';
        verifiedTable.style.display = 'none';
        reviewedTable.style.display = 'none';
        facultyTable.style.display = 'none';
    });

    facultyItem.addEventListener('click', function () {
        // Show the "Faculty" table and hide others
        facultyTable.style.display = 'block';
        verifiedTable.style.display = 'none';
        reviewedTable.style.display = 'none';
        resultsTable.style.display = 'none';
    });
});





//pressing sidebar
document.addEventListener('DOMContentLoaded', function () {
    const dashboardLink = document.getElementById('student-profile-link');
    const dashboardContent = document.getElementById('profile-content');
    const announcementssLink = document.getElementById('announcements-link');
    const announcementsContent = document.getElementById('announcements-content');
    const manageScheduleLink = document.querySelector('li:nth-child(3) a'); // Select the third menu item
    const manageScheduleContent = document.getElementById('result-content'); // ID for Manage Schedule content
    const manageFacultyLink = document.querySelector('li:nth-child(4) a'); // Select the fourth menu item
    const manageFacultyContent = document.getElementById('ManageFaculty-content'); // ID for Manage Faculty content
    const viewRequestLink = document.querySelector('li:nth-child(5) a'); // Select the fifth menu item
    const viewRequestContent = document.getElementById('ViewRequest-content'); // ID for View Request content

    // Initially hide the content divs
    dashboardContent.style.display = 'block';
    announcementsContent.style.display = 'none';
    manageScheduleContent.style.display = 'none'; // Hide Manage Schedule content by default
    manageFacultyContent.style.display = 'none'; // Hide Manage Faculty content by default
    viewRequestContent.style.display = 'none'; // Hide View Request content by default

    // Add event listeners to the links
    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'block'; // Show the dashboard content
        announcementsContent.style.display = 'none'; // Hide the approve applicants content
        manageScheduleContent.style.display = 'none'; // Hide Manage Schedule content
        manageFacultyContent.style.display = 'none'; // Hide Manage Faculty content
        viewRequestContent.style.display = 'none'; // Hide View Request content
    });

    announcementssLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none'; // Hide the dashboard content
        announcementsContent.style.display = 'block'; // Show the approve applicants content
        manageScheduleContent.style.display = 'none'; // Hide Manage Schedule content
        manageFacultyContent.style.display = 'none'; // Hide Manage Faculty content
        viewRequestContent.style.display = 'none'; // Hide View Request content
    });

    manageScheduleLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none'; // Hide the dashboard content
        announcementsContent.style.display = 'none'; // Hide the approve applicants content
        manageScheduleContent.style.display = 'block'; // Show Manage Schedule content
        manageFacultyContent.style.display = 'none'; // Hide Manage Faculty content
        viewRequestContent.style.display = 'none'; // Hide View Request content
    });

    manageFacultyLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none'; // Hide the dashboard content
        announcementsContent.style.display = 'none'; // Hide the approve applicants content
        manageScheduleContent.style.display = 'none'; // Hide Manage Schedule content
        manageFacultyContent.style.display = 'block'; // Show Manage Faculty content
        viewRequestContent.style.display = 'none'; // Hide View Request content
    });

    viewRequestLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none'; // Hide the dashboard content
        announcementsContent.style.display = 'none'; // Hide the approve applicants content
        manageScheduleContent.style.display = 'none'; // Hide Manage Schedule content
        manageFacultyContent.style.display = 'none'; // Hide Manage Faculty content
        viewRequestContent.style.display = 'block'; // Show View Request content
    });
});