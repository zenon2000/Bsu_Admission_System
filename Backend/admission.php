<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nature_of_degree = $_POST['nature_of_degree'];
    $program = $_POST['program'];
    $last_name = $_POST['last_name'];
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $birthdate = $_POST['birthdate'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $house_street = $_POST['house_street'];
    $barangay_subdivision = $_POST['barangay_subdivision'];
    $municipality_city = $_POST['municipality_city'];
    $province = $_POST['province'];
    $country_state = $_POST['country_state'];
    $zip_code = $_POST['zip_code'];
    $gwa = $_POST['gwaGrade'];
    $english_grade = $_POST['englishGrade'];
    $math_grade = $_POST['mathGrade'];
    $science_grade = $_POST['scienceGrade'];

    $stmt = $conn->prepare("INSERT INTO admission_data (nature_of_degree, program, last_name, first_name, middle_name, birthdate, gender, email, address, gwa, english_grade, math_grade, science_grade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssssss", $nature_of_degree, $program, $last_name, $first_name, $middle_name, $birthdate, $gender, $email, "$house_street, $barangay_subdivision, $municipality_city, $province, $country_state, $zip_code", $gwa, $english_grade, $math_grade, $science_grade);

    if ($stmt->execute()) {
        echo "Form data saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
