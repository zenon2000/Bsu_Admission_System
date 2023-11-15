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



//pressing the box info and dashboard

document.addEventListener('DOMContentLoaded', function () {
    const AvailableItem = document.getElementById('available-box');
    const AdmittedItem = document.getElementById('admission-box');
    const ReadmittedItem = document.getElementById('admitted-box');
    const NonqualifiedItem = document.getElementById('readmitted-box');
});

//pressing Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const dashboardLink = document.getElementById('dashboard-link');
    const dashboardContent = document.getElementById('dashboard-content');
    const MasterListLink = document.getElementById('master-list-link');
    const MasterListContent = document.getElementById('master-list-content');
    const StudentResultLink = document.getElementById('student-result-link'); 
    const StudentResultContent = document.getElementById('student-result-content');
  
    
    // Initially hide the content divs by default
    dashboardContent.style.display = 'block';
    MasterListContent.style.display = 'none';
    StudentResultContent.style.display = 'none';
  

    // Add event listeners to the links
    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'block';
        MasterListContent.style.display = 'none';
        StudentResultContent.style.display = 'none';
     
    });

    MasterListLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        MasterListContent.style.display = 'block';
        StudentResultContent.style.display = 'none';
       
    });

    StudentResultLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        MasterListContent.style.display = 'none';
        StudentResultContent.style.display = 'block';
      
    });

  
});

// tab like buttons for Student Result and Forms
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
});

//dropdown for nature of degree
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('myDropdown');
    var secondDropdownContainer = document.getElementById('secondDropdownContainer');
    var secondDropdown = document.getElementById('secondDropdown');

    // Add an event listener to the dropdown
    dropdown.addEventListener('change', function () {
        if (dropdown.value === 'board') {
            // Show the second dropdown if 'Board' is selected
            secondDropdownContainer.style.display = 'block';
        } else {
            // Hide the second dropdown for other selections
            secondDropdownContainer.style.display = 'none';
        }
    });

    // Set the value based on the condition
    var condition = true;

    if (condition) {
        dropdown.value = 'board';
        // Show the second dropdown initially if 'Board' is selected
        secondDropdownContainer.style.display = 'block';
    } else {
        dropdown.value = 'non-board';
    }
});


$(document).ready(function () {
    // Enable editing when the "Edit" button is clicked
    $(".btn-edit").on("click", function () {
        const id = $(this).data("id");

        // Hide "Edit" button and show "Update" button
        $(`#row_${id} .btn-edit`).hide();
        $(`#row_${id} .btn-update`).show();

        // Enable editing for all editable spans in the row
        $(`#row_${id} .editable`).attr("contenteditable", true).prop("disabled", false);

        // Replace status cell with dropdown
        const currentStatus = $(`#row_${id} .status-dropdown`).val();
        const statusDropdownHtml = `
            <select class='status-dropdown' data-id='${id}'>
                <option value='Pending' ${currentStatus === 'Pending' ? 'selected' : ''}>Pending</option>
                <option value='Approve' ${currentStatus === 'Approve' ? 'selected' : ''}>Approve</option>
                <option value='Reject' ${currentStatus === 'Reject' ? 'selected' : ''}>Reject</option>
            </select>
        `;
        $(`#row_${id} .status-cell`).html(statusDropdownHtml);
    });


    // Update the data in the database when the "Update" button is clicked
    $(".btn-update").on("click", function () {
        const id = $(this).data("id");

        // Hide "Update" button and show "Edit" button
        $(`#row_${id} .btn-update`).hide();
        $(`#row_${id} .btn-edit`).show();

        // Disable editing for all editable spans and the status dropdown in the row
        $(`#row_${id} .editable, #row_${id} .status-dropdown`).attr("contenteditable", false).prop("disabled", true);

        // Update the data in the database using AJAX
        const data = {};
        data['status'] = $(`#row_${id} .status-dropdown`).val();
        $(`#row_${id} .editable`).each(function () {
            const editType = $(this).data("edit-type");
            const value = $(this).text();
            data[editType] = value;
        });

        $.ajax({
            url: "UpdateStaff.php",
            method: "POST",
            data: { id: id, data: data },
            success: function (response) {
                // Handle success (if needed)
            },
            error: function (error) {
                console.error("Error updating data: " + error);
            }
        });
    });

    // Deletion
    $(".btn-delete").on("click", function () {
        const id = $(this).data("id");

        // Confirm deletion
        if (confirm("Are you sure you want to delete this staff member?")) {
            // Delete the data in the database using AJAX
            $.ajax({
                url: "delete_staff.php",
                method: "GET",
                data: { id: id },
                success: function (response) {
                    // Remove the row from the table on success
                    $(`#row_${id}`).remove();
                },
                error: function (error) {
                    console.error("Error deleting data: " + error);
                }
            });
        }
    });
});