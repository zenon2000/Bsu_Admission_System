<?php
// get_admission_data.php

include 'config.php';

// Assuming you have a table named 'admission_data'
$query = "SELECT applicant_name FROM admission_data WHERE id = :user_id"; // Replace 'user_id' with the actual user identifier

// Prepare and execute the query (you should use prepared statements to prevent SQL injection)
// Bind parameters, execute, and fetch data...

// Example response (replace this with actual fetched data)
$response = [
    'applicant_name' => 'John Doe',
    // Add other fields as needed
];

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
