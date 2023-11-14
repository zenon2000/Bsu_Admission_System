<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $userType = $_POST['userType'];

        // Check if the email already exists
        $checkEmailQuery = "SELECT id FROM users WHERE email = ?";
        $stmtCheckEmail = $conn->prepare($checkEmailQuery);
        $stmtCheckEmail->bind_param("s", $email);
        $stmtCheckEmail->execute();
        $stmtCheckEmail->store_result();
    
        if ($stmtCheckEmail->num_rows > 0) {
            // Email already exists, inform the user
            echo "Email already in use. Please choose another email.";
            $stmtCheckEmail->close();
            $conn->close();
            exit(); // Stop execution
        }
        // Proceed with user registration if the email is unique
        // Save the user's email in the session
    $_SESSION['registered_email'] = $email;
    
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, userType) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $hashedPassword, $userType);

    if ($stmt->execute()) {
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
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