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


//pressing the box info

document.addEventListener('DOMContentLoaded', function () {
    const waitlistItem = document.getElementById('wait-info');
    const rejectedItem = document.getElementById('rejected-info');
    const admittedItem = document.getElementById('admitted-info');
   
    const waitTable = document.getElementById('wait-list');
    const rejectedTable = document.getElementById('Rejected');
    const admittedTable = document.getElementById('admitted');
    const overallTable = document.getElementById('over-all');
    // Hide all tables initially
    waitTable.style.display = 'none';
    rejectedTable.style.display = 'none';
    admittedTable.style.display = 'none';
    overallTable.style.display = 'block';

    waitlistItem.addEventListener('click', function () {
        // Show the "waitlist" table and hide others
        waitTable.style.display = 'block';
        rejectedTable.style.display = 'none';
        overallTable.style.display = 'none';
        overallTable.style.display = 'none';
       
    });

    rejectedItem.addEventListener('click', function () {
        // Show the "rejected" table and hide others
        rejectedTable.style.display = 'block';
        waitTable.style.display = 'none';
        admittedTable.style.display = 'none';
        overallTable.style.display = 'none';
    });

    admittedItem.addEventListener('click', function () {
        // Show the "admitted" table and hide others
        admittedTable.style.display = 'block';
        rejectedTable.style.display = 'none';
        waitTable.style.display = 'none';
        overallTable.style.display = 'none';
    });

});
document.addEventListener("DOMContentLoaded", function () {
    // Get references to college links and the student list container
    const collegeLinks = document.querySelectorAll(".dropdown-content a");
    const studentList = document.querySelector("#student-list tbody");

    // Sample student data
    const students = [
        { name: "John Doe", college: "CAH" },
        { name: "Jane Doe", college: "CEAT" },
        { name: "Johny Doe", college: "CEAT" },
        { name: "Johnie Doe", college: "CF" },
        { name: "Janie Doe", college: "CHET" },
        // Add more student data
    ];

    // Function to filter and display students
    function displayStudents(collegeId) {
        // Clear the existing student list
        studentList.innerHTML = "";

        // Filter students based on the selected college
        const filteredStudents = students.filter(student => student.college === collegeId);

        // Create and append rows to the student list
        filteredStudents.forEach(student => {
            const row = studentList.insertRow();
            const nameCell = row.insertCell(0);
            const collegeCell = row.insertCell(1);

            nameCell.textContent = student.name;
            collegeCell.textContent = student.college;
        });
    }

    // Add click event listeners to college links
    collegeLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the ID of the selected college
            const collegeId = link.id.replace("course-", "");

            // Display students for the selected college
            displayStudents(collegeId);
        });
    });
});
