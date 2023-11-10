<?php
// Load the database configuration file
include_once '../db_conn.php';

// Get status message
if(!empty($_SESSION['status'])){
    switch($_SESSION['status']){
        case 'succ':
            $statusType = 'alert-success';
            $statusMsg = 'Members data has been imported successfully.';
            break;
        case 'err':
            $statusType = 'alert-danger';
            $statusMsg = 'Some problem occurred, please try again.';
            break;
        case 'invalid_file':
            $statusType = 'alert-danger';
            $statusMsg = 'Please upload a valid CSV file.';
            break;
        default:
            $statusType = '';
            $statusMsg = '';
    }
}

?>


<!-- Import -->
<div id="import-content">
    <div class="head-title">
        <div class="left">
            <h1>Master List Import</h1>

            <ul class="breadcrumb">
                <li><a href="#">Master List Import</a></li>
                <li><i class='bx bx-chevron-right'></i></li>
                <li><a class="active" href="staff.php">Home</a></li>
            </ul>
        </div>
    </div>

    <form class="importform" name="import" method="post" enctype="multipart/form-data" onsubmit="return validateFile()">
        <label for="file">Select file to import:</label>
        <input type="file" id="file" name="file" accept=".csv,.xls,.xlsx" multiple>
        <button type="submit" name= "submit">Import</button>
      </form>
                <!-- Display status message -->
                <?php  if(!empty($statusMsg)){ ?>
            <div class="col-xs-12">
                <div class="alert <?php echo $statusType; ?>"><?php echo $statusMsg; ?></div>
            </div>
            <?php } ?>
 <!--import-->

 <!--import-->
 <div id="student-import">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Student Master List</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-student-import">
                    <input type="text" id="student-import-searchBox" placeholder="Search...">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Application No.</th>
                        <th>College</th>
                        <th>Program</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birth Date</th>
                        <th>Sex</th>
                        <th>Municipality</th>
                        <th>Province</th>
                        <th>Nationality</th>
                        <th>GWA</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Rank</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $show_data = $con->query("SELECT *, RANK() OVER(
                        PARTITION BY course
                        ORDER BY rank ASC) 
                        FROM student_result");
                    if($show_data ->num_rows > 0){
                        while($row = $show_data->fetch_assoc()){
                     ?>       
                    <tr>
                        <td><?php echo $row['app_number'];?></td>
                        <td><?php echo $row['college'];?></td>
                        <td><?php echo $row['course'];?></td>
                        <td><?php echo $row['lname'],$row['fname'],$row['mname'] ;?></td>
                        <td><?php echo $row['email'];?></td>
                        <td><?php echo $row['b_date'];?></td>
                        <td><?php echo $row['sex'];?></td>
                        <td><?php echo $row['municipality'];?></td>
                       <td><?php echo $row['province'];?></td>
                       <td><?php echo $row['country'];?></td>
                        <td><?php echo $row['gwa'];?></td>
                        <td><?php echo $row['math'];?></td>
                        <td><?php echo $row['science'];?></td>
                        <td><?php echo $row['english'];?></td>
                        <td><?php echo $row['rank'];?></td>
                        <td><?php echo $row['result'];?></td>

                    </tr>
                   
                    <?php }}else { ?>
                        <tr><td colspan="5">NO data found...</td></tr>
                    <?php }?>
                </tbody>
            </table>
        </div>
    </div>
  
</div>
</div>

</div>
