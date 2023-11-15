<!-- edit_deleted_staff.php -->

<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $id = $_GET['id'];

    // Fetch the deleted staff member details
    $query = "SELECT * FROM deleted_staff WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
?>

        <!DOCTYPE html>
        <html lang="en" dir="ltr">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Edit Status - <?php echo $row['name']; ?></title>
            <link rel="stylesheet" href="a.css" />
            <!-- Add any other stylesheets or scripts you need -->
        </head>

        <body>
            <h1>Edit Status - <?php echo $row['name']; ?></h1>

            <form action="update_deleted_staff.php" method="POST">
                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                <p>Name: <?php echo $row['name']; ?></p>
                <p>Email: <?php echo $row['email']; ?></p>
                <label for="status">Status:</label>
                <select id="status" name="status" required>
                    <option value="Pending" <?php echo ($row['status'] == 'Pending') ? 'selected' : ''; ?>>Pending</option>
                    <option value="Approve" <?php echo ($row['status'] == 'Approve') ? 'selected' : ''; ?>>Approve</option>
                    <option value="Reject" <?php echo ($row['status'] == 'Reject') ? 'selected' : ''; ?>>Reject</option>
                </select>
                <button type="submit">Update Status</button>
            </form>

            <!-- Add any other HTML content or scripts you need -->
        </body>

        </html>

<?php
    } else {
        echo "Deleted staff member not found.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
