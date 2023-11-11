<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password, user_type FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashedPassword, $userType);
        $stmt->fetch();
        
        if (password_verify($password, $hashedPassword)) {
            session_start();
            $_SESSION['user_id'] = $id;
            $_SESSION['user_type'] = $userType;

            if ($userType == 'staff') {
                header("Location: staff.html");
            } elseif ($userType == 'student') {
                header("Location: admissionform.html");
            } elseif ($row["user_type"] == "admin") {
                // If you want to handle admin separately, redirect to admin.html
                header("Location: admin.html");
            } else {
                echo "Invalid user type";
            }
            exit();
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }

    $stmt->close();
}

$conn->close();
?>