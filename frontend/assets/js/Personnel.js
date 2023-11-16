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
    const AnnouncementsLink = document.getElementById('announcements-link'); 
    const AnnouncementsContent = document.getElementById('announcements-content'); 
    
    // Initially hide the content divs by default
    dashboardContent.style.display = 'block';
    MasterListContent.style.display = 'none';
    StudentResultContent.style.display = 'none';
    AnnouncementsContent.style.display = 'none'; 

    // Add event listeners to the links
    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'block';
        MasterListContent.style.display = 'none';
        StudentResultContent.style.display = 'none';
        AnnouncementsContent.style.display = 'none'; 
    });

    MasterListLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        MasterListContent.style.display = 'block';
        StudentResultContent.style.display = 'none';
        AnnouncementsContent.style.display = 'none'; 
    });

    StudentResultLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        MasterListContent.style.display = 'none';
        StudentResultContent.style.display = 'block';
        AnnouncementsContent.style.display = 'none'; 
    });

    AnnouncementsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        dashboardContent.style.display = 'none';
        MasterListContent.style.display = 'none';
        StudentResultContent.style.display = 'none';
        AnnouncementsContent.style.display = 'block'; 
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

//dropdown for nature of degree (Master List)
function updateSelection(answer) {
    console.log(answer.value);
    if(answer.value == 1){
        document.getElementById('nonBoard').classList.remove('nonboardProgram');
        document.getElementById('Board').classList.add('boardProgram');
    } else {
        document.getElementById('Board').classList.remove('boardProgram');
        document.getElementById('nonBoard').classList.add('nonboardProgram');
    }
};

//dropdown for nature of degree (Student Result - NOA)
function updateSelectionNOA(answer) {
    console.log(answer.value);
    if(answer.value == 1){
        document.getElementById('nonBoardNOA').classList.remove('nonboardProgram');
        document.getElementById('BoardNOA').classList.add('boardProgram');
    } else {
        document.getElementById('BoardNOA').classList.remove('boardProgram');
        document.getElementById('nonBoardNOA').classList.add('nonboardProgram');
    }
};

//dropdown for nature of degree (Student Result - NOR)
function updateSelectionNOR(answer) {
    console.log(answer.value);
    if(answer.value == 1){
        document.getElementById('nonBoardNOR').classList.remove('nonboardProgram');
        document.getElementById('BoardNOR').classList.add('boardProgram');
    } else {
        document.getElementById('BoardNOR').classList.remove('boardProgram');
        document.getElementById('nonBoardNOR').classList.add('nonboardProgram');
    }
};

//Range Field (e.g. 1-10)
function validateRange() {
    const rangeInput = document.getElementById('rangeInput');
    const rangeValue = rangeInput.value;
  
    if (!/^\d+\-\d+$/.test(rangeValue)) {
      alert('Invalid range format. Please enter a range in the format "1-20".');
      rangeInput.value = '';
      return;
    }
  
    const [start, end] = rangeValue.split('-');
  
    if (parseInt(start) > parseInt(end)) {
      alert('Invalid range. The starting number must be less than the ending number.');
      rangeInput.value = '';
      return;
    }
  
    // Range is valid
    console.log('Valid range:', rangeValue);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the class 'bx bx-clipboard'
    var ClipboardIcon = document.querySelector('.bx.bx-clipboard');

    // Get the element with the id 'announcements-link'
    var AnnouncementsLink = document.getElementById('announcements-link');
    // click button
    var tab3Button = document.querySelector(".tab-button[data-tab='tab3']");
    var tab4Button = document.querySelector(".tab-button[data-tab='tab4']");
    var tab5Button = document.querySelector(".tab-button[data-tab='tab5']");
    var tab6Button = document.querySelector(".tab-button[data-tab='tab6']");

    // Get the element with the id 'tab4' inside 'announcements-link'
    var tab3Element = document.getElementById('tab3');
    var tab4Element = document.getElementById('tab4');
    var tab5Element = document.getElementById('tab5');
    var tab6Element = document.getElementById('tab6');

    // Add a click event listener to the clipboard icon
    ClipboardIcon.addEventListener('click', function () {
        // Navigate to the 'announcements-link' and directly show the contents of 'tab4'
        AnnouncementsLink.click();

        // Show the contents of 'tab4' and hide other tabs
        tab4Element.style.display = 'block';
        tab3Element.style.display = 'none';
        tab5Element.style.display = 'none';
        tab6Element.style.display = 'none';

        // Scroll to 'tab4' with a smooth animation
        tab4Element.scrollIntoView({ behavior: 'smooth' });
    });

    tab3Button.addEventListener("click", function () {
        // Show tab3 content and hide other tabs
        tab3Element.style.display = "block";
        tab4Element.style.display = "none";
        tab5Element.style.display = "none";
        tab6Element.style.display = "none";
    });

    tab4Button.addEventListener("click", function () {
        // Show tab4 content and hide other tabs
        tab3Element.style.display = "none";
        tab4Element.style.display = "block";
        tab5Element.style.display = "none";
        tab6Element.style.display = "none";
    });

    tab5Button.addEventListener("click", function () {
        // Show tab5 content and hide other tabs
        tab3Element.style.display = "none";
        tab4Element.style.display = "none";
        tab5Element.style.display = "block";
        tab6Element.style.display = "none";
    });

    tab6Button.addEventListener("click", function () {
        // Show tab6 content and hide other tabs
        tab3Element.style.display = "none";
        tab4Element.style.display = "none";
        tab5Element.style.display = "none";
        tab6Element.style.display = "block";
    });
});


//Students for Admission - Master List
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the class 'bx bxs-group'
    var groupIcon = document.querySelector('.bx.bxs-group');

    // Get the element with the id 'master-list-link'
    var masterListLink = document.getElementById('master-list-link');

    // Add a click event listener to the group icon
    groupIcon.addEventListener('click', function () {
        // Navigate to the master-list link when the group icon is clicked
        masterListLink.click();
    });
});

//Admitted Students - Student Result NOA
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the class 'bx bx-user-check'
    var userCheckIcon = document.querySelector('.bx.bx-user-check');

    // Get the element with the id 'student-result-link'
    var studentResultLink = document.getElementById('student-result-link');
    //click button
    var tab1Button = document.querySelector(".tab-button[data-tab='tab1']");
    var tab2Button = document.querySelector(".tab-button[data-tab='tab2']");

    // Get the element with the id 'tab1' inside 'student-result-link'
    var tab1Element = document.getElementById('tab1');
    var tab2Element = document.getElementById('tab2');

    // Add a click event listener to the user-check icon
    userCheckIcon.addEventListener('click', function () {
        // Navigate to the 'student-result-link' and directly show the contents of 'tab1'
        studentResultLink.click();
        
        // Show the contents of 'tab1'
        tab1Element.style.display = 'block';
        tab2Element.style.display = 'none';
        
        // Scroll to 'tab1' with a smooth animation
        tab1Element.scrollIntoView({ behavior: 'smooth' });
    });

    tab1Button.addEventListener("click", function () {
        // Show tab1 content and hide tab2 content
        tab1Content.style.display = "block";
        tab2Content.style.display = "none";
    });

    tab2Button.addEventListener("click", function () {
        // Show tab2 content and hide tab1 content
        tab1Content.style.display = "none";
        tab2Content.style.display = "block";
    });
});

//Students for Readmission - Student Result NOR
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the class 'bx bxs-user-x'
    var userXIcon = document.querySelector('.bx.bxs-user-x');

    // Get the element with the id 'student-result-link'
    var studentResultLink = document.getElementById('student-result-link');
    //click button
    var tab1Button = document.querySelector(".tab-button[data-tab='tab1']");
    var tab2Button = document.querySelector(".tab-button[data-tab='tab2']");

    // Get the tab content with the id 'tab2' inside 'student-result-content'
    var tab2Content = document.getElementById('tab2');
    var tab1Content = document.getElementById('tab1');

    // Add a click event listener to the user-x icon
    userXIcon.addEventListener('click', function () {
        // Navigate to 'student-result-link'
        studentResultLink.click();

        // Show the contents in 'tab2'
        tab2Content.style.display = 'block';
        tab1Content.style.display = 'none';

        // You may want to use setTimeout to ensure that the tab switch happens after the navigation
        setTimeout(function () {
            tab2Content.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Adjust the delay as needed
    });

    tab1Button.addEventListener("click", function () {
        // Show tab1 content and hide tab2 content
        tab1Content.style.display = "block";
        tab2Content.style.display = "none";
    });

    tab2Button.addEventListener("click", function () {
        // Show tab2 content and hide tab1 content
        tab1Content.style.display = "none";
        tab2Content.style.display = "block";
    });
});