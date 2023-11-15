<!-- delete_staff.php -->

<?php
include("config.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Perform the deletion based on the provided ID
    $deleteQuery = "DELETE FROM users WHERE id = ?";
    $deleteStmt = $conn->prepare($deleteQuery);
    $deleteStmt->bind_param("i", $id);

    if ($deleteStmt->execute()) {
        // Redirect to the admin page after successful deletion
        header("Location: admin.php");
        exit();
    } else {
        echo "Error deleting staff data: " . $deleteStmt->error;
    }

    $deleteStmt->close();
} else {
    // Redirect to the admin page if no ID is provided
    header("Location: admin.php");
    exit();
}

$conn->close();
?>
