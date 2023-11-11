<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];  // Note: Password is not hashed yet
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $userType = $_POST['userType'];

    $stmt = $conn->prepare("INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $hashedPassword, $userType);

    if ($stmt->execute()) {
        // Redirect to login.html upon successful registration
        header("Location: login.html");
        exit(); // Ensure script execution stops after the redirect
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
