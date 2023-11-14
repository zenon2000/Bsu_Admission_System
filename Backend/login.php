<?php
session_start();
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password, userType FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashedPassword, $userType);
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
                    header("Location: student.html");
                    exit();
                } else {
                    // User needs to fill out the admission form, redirect to admission form
                    header("Location: admissionform.html");
                    exit();
                }
            } elseif ($userType == 'admin') {
                header("Location: admin.html");
            } elseif ($userType == 'staff') {
                header("Location: staff.html");
            } else {
                // Handle other user types
            }
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "User not found";
    }

    $stmt->close();
}

$conn->close();
?>
