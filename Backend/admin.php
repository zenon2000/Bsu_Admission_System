

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BSU OUR Admission Admin</title>
    <link rel="icon" href="../frontend/assets/images/BSU Logo1.png" type="image/x-icon">
    <link rel="stylesheet" href="../frontend\assets\css\adminf.css" />
    <!-- Boxicons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>

<body>
    <!-- SIDEBAR -->
    <section id="sidebar">
        <a class="brand">
            <img class="bsulogo" src="../frontend/assets/images/BSU Logo1.png" alt="BSU LOGO">
            <span class="text">Admin</span>
        </a>

        <ul class="side-menu top">
            <li class="active">
                <a href="#" id="dashboard-link">
                    <i class='bx bxs-dashboard'></i>
                    <span class="text">Dashboard</span>
                </a>
            </li>

            <li class="">
                <a href="#" id="master-list-link">
                    <i class='bx bxs-user-pin'></i>
                    <span class="text">Applicants</span>
                </a>
            </li>

            <li class="">
                <a href="#" id="student-result-link">
                    <i class='bx bxs-window-alt'></i>
                    <span class="text">Personnels</span>
                </a>
            </li>

           
        </ul>
    </section>
    <!-- SIDEBAR -->

    <!-- CONTENT -->
    <section id="content">
        <!-- NAVBAR -->
        <nav>
            <i class='bx bx-menu'></i>
            <a>Categories</a>
            <form id="search-form">
                <div class="form-input" style="display: none;">
                    <input type="text" id="searchInput" placeholder="Search...">
                    <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
                </div>
            </form>
            <div id="clock">8:10:45</div>
           
            <a href="#" class="profile" id="profile-button">
                <img src="../frontend/assets/images/human icon.png" alt="User Profile">
            </a>

        </nav>
        <!-- NAVBAR -->

        <!-- MAIN -->

        <main>
        <!--Dashboard-->
            <div id="dashboard-content">
                <div class="head-title">
                    <div class="left">
                        <h1>Dashboard</h1>
                        <ul class="breadcrumb">
                            <li><a href="#">Dashboard</a></li>
                            <li><i class='bx bx-chevron-right'></i></li>
                            <li><a class="active" href="staff.html">Home</a></li>
                        </ul>
                    </div>
                </div>

                <ul class="box-info">
                    <li id="available-box">
                        <i class='bx bx-clipboard'></i>
                        <span class="text">
                            <h3>1020</h3>
                            <p>Available Slots</p>
                        </span>
                    </li>

                    <li id="admission-box">
                        <i class='bx bxs-group'></i>
                        <span class="text">
                            <h3>2834</h3>
                            <p>Students For Admission</p>
                        </span>
                    </li>

                    <li id="admitted-box">
                        <i class='bx bx-user-check'></i>
                        <span class="text">
                            <h3>2543</h3>
                            <p>Admitted Students</p>
                        </span>
                    </li>

                    <li id="readmitted-box">
                        <i class='bx bxs-user-x'></i>
                        <span class="text">
                            <h3>1020</h3>
                            <p>Students For Readmission</p>
                        </span>
                    </li>
                </ul>

            </div>

            <!--Master List-->
            <div id="master-list-content">
                <div class="head-title">
                    <div class="left">
                        <h1>Master List</h1>
                        <ul class="breadcrumb">
                            <li><a href="#">Master List</a></li>
                            <li><i class='bx bx-chevron-right'></i></li>
                            <li><a class="active" href="staff.html">Home</a></li>
                        </ul>
                    </div>
                </div>
                <!--master list-->
                <div id="master-list">
                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <div class="dropdown-nature">
                                <h3>List of Students</h3>
                                
                            </div>
                            </div>
                            <div id="table-container">
                            <table>
                                <colgroup>
                                    <col style="width: 10%;">
                                    <col style="width: 13%;">
                                    <col style="width: 26%;">
                                    <col style="width: 23%;">
                                    <col style="width: 6%;">
                                    <col style="width: 6%;">
                                    <col style="width: 6%;">
                                    <col style="width: 6%;">
                                    <col style="width: 4%;">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Application No.</th>
                                        <th>Nature of Degree</th>
                                        <th>Program</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Math</th>
                                        <th>Science</th>
                                        <th>English</th>
                                        <th>GWA</th>
                                        <th>Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>000001</td>
                                        <td>Non-Board</td>
                                        <td>Bachelor of Information Technology</td>
                                        <td>Toge Inumaki</td>
                                        <td>toge@gmail.com</td>
                                        <td>80%</td>
                                        <td>83%</td>
                                        <td>83%</td>
                                        <td>83%</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>

          <!-- Personnel List  -->
            <div id="student-result-content">
                <div class="head-title">
                    <div class="left">
                        <h1>Personnels</h1>
                        <ul class="breadcrumb">
                            <li><a href="#">Personnels</a></li>
                            <li><i class='bx bx-chevron-right'></i></li>
                            <li><a class="active" href="staff.html">Home</a></li>
                        </ul>
                    </div>
                </div>

      <!-- Staff List Table -->
<div id="master-listpersonnel">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>List of Personnels</h3>
               
            </div>
            <div id="table-container">
                <table>
                    <colgroup>
                        <col style="width: 10%;">
                        <col style="width: 13%;">
                        <col style="width: 26%;">
                        <col style="width: 23%;">
                        <col style="width: 10%;">
                        <col style="width: 10%;">
                        
                      
                    </colgroup>
                    <thead>
                        <tr>
                            <th>ID NO.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Status</th>
                            
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody id="stafflist">
                    <?php
                        include("config.php");

                        $query = "SELECT * FROM users WHERE userType = 'staff'";
                        $result = $conn->query($query);

                        while ($row = $result->fetch_assoc()) {
                            echo "<tr id='row_" . $row['id'] . "'>";
                            echo "<td>" . $row['id'] . "</td>";
                            echo "<td><span class='editable' data-id='" . $row['id'] . "' data-edit-type='name'>" . $row['name'] . "</span></td>";
                            echo "<td><span class='editable' data-id='" . $row['id'] . "' data-edit-type='email'>" . $row['email'] . "</span></td>";
                            echo "<td><span class='editable' data-id='" . $row['id'] . "' data-edit-type='password'>" . $row['password'] . "</span></td>";
                            echo "<td>";
                            echo "<select class='status-dropdown' data-id='" . $row['id'] . "'>";
                            echo "<option value='Pending' " . ($row['status'] == 'Pending' ? 'selected' : '') . ">Pending</option>";
                            echo "<option value='Approve' " . ($row['status'] == 'Approve' ? 'selected' : '') . ">Approve</option>";
                            echo "<option value='Reject' " . ($row['status'] == 'Reject' ? 'selected' : '') . ">Reject</option>";
                            echo "</select>";
                            echo "</td>";
                            echo "<td>";
                            echo "<button class='btn-edit' data-id='" . $row['id'] . "'>Edit</button>";
                            echo "<button class='btn-update' data-id='" . $row['id'] . "' style='display: none;'>Update</button>";
                            echo "<button class='btn-delete' data-id='" . $row['id'] . "'>Delete</button>";
                            echo "</td>";
                            echo "</tr>";
                        }

                        $conn->close();
                        ?>
                       <div>
  
                    </tbody>
                </table>
<table>
<a href="restore_staff.php">Restore Deleted Staff Members</a>
                    <h2>Deleted Staff Members</h2>
<?php
include("config.php");

// Fetch deleted staff members
$query = "SELECT * FROM deleted_staff"; // Assuming you have a table to store deleted staff members
$result = $conn->query($query);

if ($result->num_rows > 0) {
    echo "<table>";
    echo "<thead>";
    echo "<tr>";
    echo "<th>ID NO.</th>";
    echo "<th>Name</th>";
    echo "<th>Email</th>";
    echo "<th>Status</th>";
    echo "<th>Action</th>";
    echo "</tr>";
    echo "</thead>";
    echo "<tbody>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['status'] . "</td>";
        echo "<td><a href='edit_deleted_staff.php?id=" . $row['id'] . "'>Edit Status</a></td>";
        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table>";
} else {
    echo "No deleted staff members found.";
}

$conn->close();
?>
                </div>
</table>
                
            </div>
        </div>
    </div>
</div>
              

               

            </div>

         
        </main>
        <!-- MAIN -->

    </section>

    <!-- Add the profile popup container here -->
    <div class="profile-popup" id="profile-popup">
        <!-- Popup content -->
        <div class="popup-content" id="profile-content">
            <div class="profile-header">
                <img src="../frontend/assets/images/human icon.png" alt="User Profile Picture" class="profile-picture"
                    id="profile-picture">
                <p class="profile-name">John Doe</p>
            </div>

            <hr>
            <div class="profile-menu">
                <a href="#" id="settings" class="profile-item">  <i class='bx bx-sun'></i>Display</a>
         
       <div class="dropdown" id="settings-dropdown">
                    <a href="#">Dark Mode 
                        <input type="checkbox" id="switch-mode" hidden>
                        <label for="switch-mode" class="switch-mode"></label></a>

                

                </div>
<a href="#" id="settings" class="profile-item"><i class='bx bx-cog'></i> Settings</a>              
<a href="#" id="help" class="profile-item"><i class='bx bx-question-mark'></i> Help and Support</a>

<div class="dropdown" id="help-dropdown">
    <!-- Content for Help and Support dropdown -->
    <!-- Trigger for the FAQ pop-up -->
    <a href="faq_page.html" onclick="openPopup('faq-popup')">FAQ (Frequently Asked Questions)</a>
    
    <!-- Trigger for the Contact Us pop-up -->
    <a href="#" onclick="openPopup('contact-popup')">Contact Us</a>
    
    <!-- Trigger for the Report a Problem pop-up -->
    <!-- <a href="#" onclick="openPopup('report-popup')">Report a Problem</a>-->
</div>

<a href="#" id="logout" class="profile-item" onclick="confirmLogout()"><i class='bx bx-log-out'></i> Logout</a>
    <script>
        //log out prompt
        function confirmLogout() {
        // Display a confirmation dialog
        var confirmLogout = confirm("Are you sure you want to log out?");

        // If the user clicks "OK," redirect to logout.php
        if (confirmLogout) {
            window.location.href = "../backend/logout.php";
        } else {
            alert("Logout canceled");
        }
    }
    </script>            
        </div>
    </div>
</div>

    <!-- CONTENT -->
    <script src="../frontend\assets\js\adminf.js"></script>
</body>

</html>
