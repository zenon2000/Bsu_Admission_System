<?php
include_once '../db_conn.php';
?>

<!-- Export -->
<div id="export-content">
    <div class="head-title">
        <div class="left">
            <h1>Master List Export</h1>
            <ul class="breadcrumb">
                <li><a href="#">Master List Export</a></li>
                <li><i class='bx bx-chevron-right'></i></li>
                <li><a class="active" href="#">Home</a></li>
            </ul>
        </div>
    </div>
    <button name="export" type="submit" class="button export" onclick="exportToExcel()">Export to Excel</button>
 <!--export-->
 <div id="student-export">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Student Master List</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-student-export">
                    <input type="text" id="student-export" placeholder="Search...">
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
                        <th>Age</th>
                        <th>Civil Status</th>
                        <th>Nationality</th>
                        <th>GWA</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>

                <?php 

                // Fetch records from database 
                $result = $con->query("SELECT * FROM student_result ORDER BY rank ASC"); 
                if($result->num_rows > 0){ 
                    while($row = $result->fetch_assoc()){ 
                ?>
                    <tr>
                        <td><?php echo $row['app_number']; ?></td>
                        <td><?php echo $row['college']; ?></td>
                        <td><?php echo $row['course']; ?></td>
                        <td><?php echo $row['lname']; ?></td>
                        <td><?php echo $row['email']; ?></td>
                        <td><?php echo $row['b_date']; ?></td>
                        <td><?php echo $row['sex']; ?></td>
                        <td>18</td>
                        <td>Single</td>
                        <td>Japanese</td>
                        <td>83%</td>
                        <td>84%</td>
                        <td>80%</td>
                        <td>81%</td>
                        <td>220</td>
                    </tr>

                    <?php } }else{ ?>
                    <tr><td colspan="7">No member(s) found...</td></tr>
                <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</div>
