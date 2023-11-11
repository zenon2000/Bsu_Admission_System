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
