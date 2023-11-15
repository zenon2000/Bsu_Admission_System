<!-- update_deleted_staff.php -->

<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $status = $_POST['status'];

    // Update the status of the deleted staff member
    $updateQuery = "UPDATE deleted_staff SET status = ? WHERE id = ?";
    $stmt = $conn->prepare($updateQuery);
    $stmt->bind_param("si", $status, $id);

    if ($stmt->execute()) {
        echo "Status updated successfully.";
    } else {
        echo "Error updating status: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
