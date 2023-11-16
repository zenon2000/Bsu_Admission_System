<?php
session_start();
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password, userType, status FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashedPassword, $userType, $status);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            $_SESSION['user_id'] = $id;
            $_SESSION['user_type'] = $userType;

            // Check if the user is a student and has filled out the admission form
            if ($userType == 'student') {
                $checkAdmissionQuery = "SELECT id FROM admission_data WHERE email = ?";
                $stmtCheckAdmission = $conn->prepare($checkAdmissionQuery);
                $stmtCheckAdmission->bind_param("s", $email);
                $stmtCheckAdmission->execute();
                $stmtCheckAdmission->store_result();

                if ($stmtCheckAdmission->num_rows > 0) {
                    // User has already filled out the admission form, redirect to student dashboard
                    header("Location: ../Backend/student.php");
                    exit(); 
                } else {
                    // User needs to fill out the admission form, redirect to admission form
                    header("Location: ../Backend/form.php");
                    exit();
                } 
            } elseif ($userType == 'staff') {
                // Check the status of staff registration
                if ($status == 'approved') {
                    header("Location: ../Backend/personnel.php");
                    exit();
                } elseif ($status == 'pending') {
                    echo "Your registration is pending approval.";
                } elseif ($status == 'rejected') {
                    echo "Your registration has been rejected. Please contact the administrator.";
                }
            } elseif ($userType == 'admin') {
                header("Location: ../backend/admin.php");
            } else {
                echo "Incorrect password";
            }
        }
    } else {
        echo "User not found";
    }

    $stmt->close();
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin and Faculty login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <link rel="stylesheet" href="../frontend/assets/css/login.css">
</head>

<body>
    <header>
        <div class="icon">
            <a href="#" class="logo"><img src="../frontend/assets/images/BSU Logo1.png" alt="BSU Logo"></a>
            <h2 class="scname">Benguet State University</h2>
        </div>
    </header>

    <style>
        body {

            background-image: url('../frontend/assets/images/banner.jpg');
        }
    </style>


    <section class="content">
        <div class="side">
            <h1>Welcome to<br><span>Benguet State <br>University </span> <br>Admission</h1>
            <button class="cn" id="joinUsButton">JOIN US</button>
        </div>

        <div class="form" id="loginForm">
            <form action="login.php" method="POST">
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button class="btnn" type="submit">Login</button>
                <p class="link">Don't have an account<br>
                    <a href="#" id="signupLink">Sign up </a> here
                </p>
            </form>
        </div>

      
        <div class="form" id="registrationForm">
            <form  action="register.php" method="POST" id="RegForm">
                <h2>Register</h2>
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" id="registerEmail" name="password" placeholder="Password" required>
                <input type="password" name="confirm_password" placeholder="Confirm Password" required>
                <br>
                <label for="userType">Select User Type:</label>
                <select id="userType" name="userType" required>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                </select>
                <button class="btnn" type="submit">Register</button>
                <p class="link">Already have an account<br>
                    <a href="#" id="loginLink">Login</a> here
                </p>
            </form>
           
        </div>
        </div>
    </section>



    <footer>

    </footer>

    <script src="../frontend\assets\js\login.js"></script>
</body>

</html>