<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $id_picture = file_get_contents($_FILES['id_picture']['tmp_name']); // Assuming id_picture is a file input
    $last_name = $_POST['last_name'];
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $gender = $_POST['gender'];
    $birthdate = $_POST['birthdate'];
    $birthplace_municipality = $_POST['birthplace-municipality'];
    $birthplace_province = $_POST['birthplace-province'];
    $birthplace_country = $_POST['birthplace_country'];
    $age = $_POST['age'];
    $civil_status = $_POST['civil_status'];
    $citizenship = $_POST['citizenship'];
    $nationality = $_POST['nationality'];
    $house_street = $_POST['house_street'];
    $barangay_subdivision = $_POST['barangay_subdivision'];
    $municipality_city = $_POST['municipality_city'];
    $province = $_POST['province'];
    $country_state = $_POST['country_state'];
    $zip_code = $_POST['zip_code'];
    $phone = $_POST['phone'];
    $facebook = $_POST['facebook'];
    $email = $_POST['email'];
    $contact_person_1 = $_POST['contact_person_1'];
    $contact_person_1_mobile = $_POST['contact_person_1_mobile'];
    $relationship_1 = $_POST['relationship_1'];
    $contact_person_2 = $_POST['contact_person_2'];
    $contact_person_2_mobile = $_POST['contact_person_2_mobile'];
    $relationship_2 = $_POST['relationship_2'];
    $academic_classification = $_POST['academic_classification'];
    $high_school_name_address = $_POST['high_school_name_address'];
    $als_pept_name_address = $_POST['als_pept_name_address'];
    $college_name_address = $_POST['college_name_address'];
    $lrn = $_POST['lrn'];
    $degree_applied = $_POST['degree_applied'];
    $nature_of_degree = $_POST['nature_of_degree'];
    $application_date = $_POST['application_date'];

    // Process the signature image
    $signature_image = file_get_contents($_FILES['signature_image']['tmp_name']);

    // Insert into admissions table
    $stmt = $conn->prepare("INSERT INTO admissions (id_picture, last_name, first_name, middle_name, gender, birthdate, birthplace_municipality, birthplace_province, birthplace_country, age, civil_status, citizenship, nationality, house_street, barangay_subdivision, municipality_city, province, country_state, zip_code, phone, facebook, email, contact_person_1, contact_person_1_mobile, relationship_1, contact_person_2, contact_person_2_mobile, relationship_2, academic_classification, high_school_name_address, als_pept_name_address, college_name_address, lrn, degree_applied, nature_of_degree, application_date, signature_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("bssssssssssssssssssssssssssssssssssssssssss", 
        $id_picture, $last_name, $first_name, $middle_name, $gender, $birthdate, $birthplace_municipality, $birthplace_province, $birthplace_country, $age, $civil_status, $citizenship, $nationality, $house_street, $barangay_subdivision, $municipality_city, $province, $country_state, $zip_code, $phone, $facebook, $email, $contact_person_1, $contact_person_1_mobile, $relationship_1, $contact_person_2, $contact_person_2_mobile, $relationship_2, $academic_classification, $high_school_name_address, $als_pept_name_address, $college_name_address, $lrn, $degree_applied, $nature_of_degree, $application_date, $signature_image);

    if ($stmt->execute()) {
        // Redirect or display success message
        header("Location: success_page.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
$conn->close();
?>
