<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form data
    $id_picture = $_FILES['id_picture'];
    $applicant_name = $_POST['applicant_name'];
    $gender = $_POST['gender'];
    $birthdate = date('Y-m-d', strtotime(str_replace('/', '-', $_POST['birthdate'])));
    $birthplace = $_POST['birthplace'];
    $age = $_POST['age'];
    $civil_status = $_POST['civil_status'];
    $citizenship = $_POST['citizenship'];
    $nationality = $_POST['nationality'];
    $permanent_address = $_POST['permanent_address'];
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
    $applicant_number = $_POST['applicant_number'];
    $application_date = date('Y-m-d', strtotime(str_replace('/', '-', $_POST['application_date'])));
    $english_grade = $_POST['englishGrade'];
    $math_grade = $_POST['mathGrade'];
    $science_grade = $_POST['scienceGrade'];
    $gwa_grade = $_POST['gwaGrade'];

// Check if a file was uploaded
if ($id_picture['error'] === UPLOAD_ERR_OK) {
    // Ensure the file is an image (optional)
    $allowed_types = array('image/jpeg', 'image/png', 'image/gif');
    if (!in_array($id_picture['type'], $allowed_types)) {
        echo "Invalid file type. Please upload a valid image.";
        exit();
    }

    // Move the uploaded file to the 'uploads' folder
    $upload_folder = 'uploads/';
    $file_name = uniqid() . '_' . basename($id_picture['name']);
    $target_path = $upload_folder . $file_name;

    if (move_uploaded_file($id_picture['tmp_name'], $target_path)) {
        echo "File uploaded successfully!";
    } else {
        echo "Error moving file to the server.";
        exit();
    }

// Save file path in the database
$id_picture_data = $target_path;
} else {
    echo "Error uploading ID picture. Error code: " . $id_picture['error'];
    exit();
}



    // Prepare SQL statement for inserting data into admission_data table
    $stmt = $conn->prepare("INSERT INTO admission_data (id_picture, applicant_name, gender, birthdate, birthplace, age, civil_status, citizenship, nationality, permanent_address, zip_code, phone, facebook, email, contact_person_1, contact_person_1_mobile, relationship_1, contact_person_2, contact_person_2_mobile, relationship_2, academic_classification, high_school_name_address, als_pept_name_address, college_name_address, lrn, degree_applied, nature_of_degree, applicant_number, application_date, english_grade, math_grade, science_grade, gwa_grade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("sssssissssiisssississssssssssdddd", 
        $id_picture_data, $applicant_name, $gender, $birthdate, $birthplace, $age, $civil_status, $citizenship, $nationality, $permanent_address, $zip_code, $phone, $facebook, $email, $contact_person_1, $contact_person_1_mobile, $relationship_1, $contact_person_2, $contact_person_2_mobile, $relationship_2, $academic_classification, $high_school_name_address, $als_pept_name_address, $college_name_address, $lrn, $degree_applied, $nature_of_degree, $applicant_number, $application_date, $english_grade, $math_grade, $science_grade, $gwa_grade);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Data saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

$conn->close();
?>
