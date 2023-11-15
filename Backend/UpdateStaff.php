<?php
session_start();
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $data = $_POST['data'];

    // Check if the user is an admin (you may want to adjust this condition based on your authentication logic)
    if ($_SESSION['user_type'] !== 'admin') {
        echo "Permission denied";
        exit();
    }

    // Escape and sanitize data to prevent SQL injection
    $id = mysqli_real_escape_string($conn, $id);
    $status = mysqli_real_escape_string($conn, $data['status']);
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    // Update the staff data in the database
    $updateQuery = "UPDATE users SET name = '$name', email = '$email', password = '$password', status = '$status' WHERE id = '$id'";
    $result = $conn->query($updateQuery);

    if ($result) {
        echo "Data updated successfully";
    } else {
        echo "Error updating data: " . $conn->error;
    }

    $conn->close();
}
?>
