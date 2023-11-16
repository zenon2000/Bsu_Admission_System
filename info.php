
<?php
session_start();
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
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
                    header("Location: ../frontend/student.html");
                    exit();
                } else {
                    // User needs to fill out the admission form, redirect to admission form
                    header("Location: ../Backend/form.php");
                    exit();
                } 
            } elseif ($userType == 'staff') {
                // Check the status of staff registration
                if ($status == 'approved') {
                    header("Location: ../frontend/personnel.html"); 
                    exit();
                } elseif ($status == 'pending') {
                    echo "Your registration is pending approval.";
                } elseif ($status == 'rejected') {
                    echo "Your registration has been rejected. Please contact the administrator.";
                }
            } elseif ($userType == 'admin') {
                header("Location:../backend/admin.php");
                exit();
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

