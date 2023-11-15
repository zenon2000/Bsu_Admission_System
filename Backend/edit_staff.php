<!-- edit_staff.php -->

<?php
include("config.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Fetch staff data based on the ID
    $query = "SELECT * FROM users WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $staffData = $result->fetch_assoc();
    $stmt->close();

    // Handle form submission to update the staff data in the database
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $status = $_POST['status'];

        // Update staff data in the database
        $updateQuery = "UPDATE users SET name = ?, email = ?, password = ?, status = ? WHERE id = ?";
        $updateStmt = $conn->prepare($updateQuery);
        $updateStmt->bind_param("ssssi", $name, $email, $password, $status, $id);

        if ($updateStmt->execute()) {
            // Redirect to the admin page after successful update
            header("Location: admin.php");
            exit();
        } else {
            echo "Error updating staff data: " . $updateStmt->error;
        }

        $updateStmt->close();
    }

    // Display a form to edit staff data
    ?>
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Edit Staff Data</title>
    </head>
    
    <body>
        <h2>Edit Staff Data</h2>
        <form method="post" action="">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="<?php echo $staffData['name']; ?>" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo $staffData['email']; ?>" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value="<?php echo $staffData['password']; ?>" required>
            <br>
            <label for="status">Status:</label>
            <select id="status" name="status" required>
                <option value="pending" <?php echo ($staffData['status'] == 'pending') ? 'selected' : ''; ?>>Pending</option>
                <option value="approved" <?php echo ($staffData['status'] == 'approved') ? 'selected' : ''; ?>>Approved</option>
                <option value="rejected" <?php echo ($staffData['status'] == 'rejected') ? 'selected' : ''; ?>>Rejected</option>
            </select>
            <br>
            <input type="submit" value="Update">
        </form>
    </body>
    
    </html>
    <?php
} else {
    // Redirect to the admin page if no ID is provided
    header("Location: admin.php");
    exit();
}

$conn->close();
?>
