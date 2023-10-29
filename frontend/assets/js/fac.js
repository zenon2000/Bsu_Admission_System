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


//pressing the box info and dashboard

document.addEventListener('DOMContentLoaded', function () {
    const AvailableItem = document.getElementById('available-box');
    const AdmittedItem = document.getElementById('admitted-box');
    const ReadmittedItem = document.getElementById('readmitted-box');
    const NonqualifiedItem = document.getElementById('nonqualified-box');
    const FormItem = document.getElementById('form-box');
    const overallItem = document.getElementById('dashboard-link');

    const AvailableTable = document.getElementById('available-slot');
    const AdmittedTable = document.getElementById('admitted');
    const ReadmittedTable = document.getElementById('readmitted');
    const NonqualifiedTable = document.getElementById('nonqualified');
    const FormTable = document.getElementById('form');
    const overallTable = document.getElementById('over-all');
  
    // Hide all tables initially excepts the over-all
    AvailableTable.style.display = 'none';
    AdmittedTable.style.display = 'none';
    ReadmittedTable.style.display = 'none';
    NonqualifiedTable.style.display = 'none';
    FormTable.style.display = 'none';
    overallTable.style.display = 'block';

    AvailableItem.addEventListener('click', function () {
        // Show the "Available" table and hide others
        AvailableTable.style.display = 'block';
        AdmittedTable.style.display = 'none';
        ReadmittedTable.style.display = 'none';
        NonqualifiedTable.style.display = 'none';
        FormTable.style.display = 'none';
        overallTable.style.display = 'none';
       
    });

    AdmittedItem.addEventListener('click', function () {
        // Show the "Admitted" table and hide others
        AvailableTable.style.display = 'none';
        AdmittedTable.style.display = 'block';
        ReadmittedTable.style.display = 'none';
        NonqualifiedTable.style.display = 'none';
        FormTable.style.display = 'none';
        overallTable.style.display = 'none';
    });

    ReadmittedItem.addEventListener('click', function () {
        // Show the "Readmitted" table and hide others
        AvailableTable.style.display = 'none';
        AdmittedTable.style.display = 'none';
        ReadmittedTable.style.display = 'block';
        NonqualifiedTable.style.display = 'none';
        FormTable.style.display = 'none';
        overallTable.style.display = 'none';
    });

    NonqualifiedItem.addEventListener('click', function () {
        // Show the "Nonqualified" table and hide others
        AvailableTable.style.display = 'none';
        AdmittedTable.style.display = 'none';
        ReadmittedTable.style.display = 'none';
        NonqualifiedTable.style.display = 'block';
        FormTable.style.display = 'none';
        overallTable.style.display = 'none';
    });

    FormItem.addEventListener('click', function () {
        // Show the "Form" table and hide others
        AvailableTable.style.display = 'none';
        AdmittedTable.style.display = 'none';
        ReadmittedTable.style.display = 'none';
        NonqualifiedTable.style.display = 'none';
        FormTable.style.display = 'block';
        overallTable.style.display = 'none';
      
    });

  overallItem.addEventListener('click', function () {
        // Show the "Overall" table and hide others
        AvailableTable.style.display = 'none';
        AdmittedTable.style.display = 'none';
        ReadmittedTable.style.display = 'none';
        NonqualifiedTable.style.display = 'none';
        FormTable.style.display = 'none';
        overallTable.style.display = 'block';
      
    });

});

//pressing Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const dashboardLink = document.getElementById('dashboard-link');
    const dashboardContent = document.getElementById('dashboard-content');
    const StudentProfileLink = document.getElementById('student-profile-link');
    const StudentProfileContent = document.getElementById('student-profile-content');
    
    // Initially hide the content divs by default
    dashboardContent.style.display = 'block';
    StudentProfileContent.style.display = 'none';
   

    // Add event listeners to the links
    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'block';
        StudentProfileContent.style.display = 'none';
    });

    StudentProfileLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        StudentProfileContent.style.display = 'block';
    });
});
