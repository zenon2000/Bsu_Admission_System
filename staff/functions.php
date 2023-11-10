
<?php
// Load the database configuration file
include_once '../db_conn.php';

if(isset($_POST['submit'])){
    
    // Allowed mime types
    $csvMimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain');
    // Validate whether selected file is a CSV file
    if(!empty($_FILES['file']['name']) && in_array($_FILES['file']['type'], $csvMimes)){
        
        // If the file is uploaded
        if(is_uploaded_file($_FILES['file']['tmp_name'])){
            
            // Open uploaded CSV file with read-only mode
            $csvFile = fopen($_FILES['file']['tmp_name'], 'r');
            
            // Skip the first line
            fgetcsv($csvFile);
            
            // Parse data from CSV file line by line
            while(($line = fgetcsv($csvFile, 10000, ",")) !== FALSE){
                // Get row data
                $app_number   = $line[0];
                $college  = $line[1];
                $course  = $line[2];
                $lname = $line[3];
                $fname = $line[4];
                $mname = $line[5];
                $email = $line[6];
                $b_date = $line[7];
                $sex = $line[8];
                $municipality = $line[9];
                $province = $line[10];
                $country = $line[11];
                $gwa = $line[12];
                $math = $line[13];
                $science = $line[14];
                $english = $line[15];
                $rank = $line[16];
                $result = $line[17];
                
                // Check whether member already exists in the database with the same app_number
                $prevQuery = "SELECT id FROM student_result WHERE app_number = '".$line[0]."'";
                $prevResult = $con->query($prevQuery);
                
                if($prevResult->num_rows > 0){
                    // Update member data in the database
                    $con->query("UPDATE student_result SET college = '".$college."', course = '".$course."',lname = '".$lname."',fname = '".$fname."', mname = '".$mname."',email = '".$email."', b_date = '".$b_date."',sex = '".$sex."',municipality = '".$municipality."', province = '".$province."', country = '".$country."', gwa= '".$gwa."', math = '".$math."', science = '".$science."',english = '".$english."',rank = '".$rank."',result = '".$result."', modified = NOW() WHERE app_number = '".$app_number."' ");
                }else{
                    // Insert member data in the database
                    $con->query("INSERT INTO student_result (app_number, college, course, lname,fname,mname,email,b_date,sex,municipality,province,country,gwa,math,science,english,rank,result,modified) VALUES ('".$app_number."', '".$college."', '".$course."','".$lname."','".$fname."','".$mname."','".$email."','".$b_date."','".$sex."','".$municipality."','".$province."','".$country."','".$gwa."','".$math."','".$science."','".$english."','".$rank."','".$result."', NOW())");
                }
            }
            
            // Close opened CSV file
            fclose($csvFile);
            
            $qstring = '?status=succ';
        }else{
            $qstring = '?status=err';
        }
    }else{
        $qstring = '?status=invalid_file';
    }
}


// Redirect to the listing page
header("Location: staff/import.php".$qstring);


if(isset($_POST["export"])){
     
    header('Content-Type: text/csv; charset=utf-8');  
    header('Content-Disposition: attachment; filename=data.csv');  
    $output = fopen("php://output", "w");  
    fputcsv($output, array('app_number', 'college', 'course', 'lname', 'fname', 'mname', 'email', 'b_date', 'sex', 'municipality', 'province', 'country', 'gwa', 'math', 'science', 'english', 'rank', 'result', 'created'));  
    $query = "SELECT * from student_result ORDER BY rank DESC";  
    $result = mysqli_query($con, $query);  
    while($row = mysqli_fetch_assoc($result))  
    {  
         fputcsv($output, $row);  
    }  
    fclose($output);  
}  