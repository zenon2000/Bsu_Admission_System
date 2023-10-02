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

//student list search
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searchIcon');
    const searchBox = document.getElementById('searchBox');
    const studentList = document.querySelectorAll('.table-data .order tbody tr');

    // Hide the search box initially
    searchBox.style.display = 'none';

    searchIcon.addEventListener('click', function () {
        // Toggle the display of the search box
        searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
    });

    // Handle input in the search box
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Hide all students initially
        studentList.forEach(function (student) {
            student.style.display = 'none';
        });

        // Show only the students whose names match the search term
        studentList.forEach(function (student) {
            const studentName = student.querySelector('td:first-child p').textContent.toLowerCase();
            if (studentName.includes(searchTerm)) {
                student.style.display = 'table-row';
            }
        });
    });
});
//student list search


//popup message
// Function to get the current time in the Philippines without GMT+8 offset
function getPhilippineTime() {
    const currentTime = new Date();
    const timeZoneOffset = 480; // Philippines Standard Time (UTC+8) offset in minutes
    const philippinesTime = new Date(currentTime.getTime() + timeZoneOffset * 60000);

    const hours = philippinesTime.getHours().toString().padStart(2, "0");
    const minutes = philippinesTime.getMinutes().toString().padStart(2, "0");
    const seconds = philippinesTime.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const messageButton = document.querySelector("#message-button");
    const messagePopup = document.querySelector(".message-popup");
    const closeButton = document.querySelector("#close-button");
    
    // Update timestamps with the current Philippine time
    const timestamp1 = document.querySelector("#timestamp1");
    const timestamp2 = document.querySelector("#timestamp2");
    timestamp1.textContent = getPhilippineTime();
    timestamp2.textContent = getPhilippineTime();
    
    // Toggle the display of the message popup when the message button is clicked
    messageButton.addEventListener("click", function () {
        // Toggle the visibility of the message popup
        messagePopup.style.display = messagePopup.style.display === "block" ? "none" : "block";
    });
    
    // Close the message popup when the close button is clicked
  
    
    // Close the message popup when the user clicks outside the popup
    document.addEventListener("click", function (event) {
        if (!messageButton.contains(event.target) && !messagePopup.contains(event.target)) {
            messagePopup.style.display = "none";
        }
    });
});

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

document.addEventListener('DOMContentLoaded', function () {
        const conversationList = document.querySelector('.conversations');
        const chatContainer = document.querySelector('.chat-container');

        // Attach click event to conversation items
        conversationList.addEventListener('click', function (event) {
            const listItem = event.target.closest('li');
            if (listItem) {
                // Toggle active class to highlight selected conversation
                const activeItem = conversationList.querySelector('.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                listItem.classList.add('active');

                // Update chat content (replace with actual messages)
                const selectedUser = listItem.querySelector('.user-name').innerText;
                const selectedUserElement = chatContainer.querySelector('.selected-user');
                selectedUserElement.innerText = selectedUser;

                // Show the chat container
                chatContainer.style.display = 'flex';
            }
        });
    });
//popup message


//pressing side bars

