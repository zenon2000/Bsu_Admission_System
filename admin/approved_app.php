<?php
 include '../db_conn.php';
 $query = "SELECT * FROM applicants";
 $result1 = mysqli_query($con, $query);
?>


<!--Approve Applicants-->   
    <div id="ApproveApplicant-content">
        <div class="head-title">
            <div class="left">
                <h1>Approve Applicants</h1>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">Approve Applicants</a>
                    </li>
                    <li><i class='bx bx-chevron-right'></i></li>
                    <li>
                        <a class="active" href="#">Home</a>
                    </li>
                </ul>
            </div>
           
        </div>
   
     

            <!--approve-->
            <div id="Approved-Applicants" class="table-data" >
                <div class="order">
                    <div class="head">
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox">
                            <input type="text" placeholder="Search...">
                        </div>
                    </div>
                <div class="table-container">
                    <table>
                      
                        <thead>
                            <tr>
                            <th>App Number</th>
                            <th>Department</th>
                            <th>Username</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Status</th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                        <?php while ($row = mysqli_fetch_array($result1)){
                           echo' <tr>';
                           echo  "<td><p>" .$row['app_number']."</p></td>";
                            echo  "<td><p>" .$row['course']."</p></td>"; 
                            echo  "<td><p>" .$row['uname']."</p></td>";
                            echo  "<td><p>" .$row['lname']."</p></td>"; 
                            echo  "<td><p>" .$row['fname']."</p></td>"; 
                            echo  "<td><p>" .$row['mname']."</p></td>"; 
                            echo  "<td><button>" .$row['action']."</button></td>";  
                        } ?>
                            <tr>
                                <td>
                                    <p>0000001</p>
                                </td>
                                <td><p>College of Information Sciences</p></td>
                                <td><p>Bachelor of Sciences in Information Technology</p></td>
                                <td><p>Lee</p></td>
                                <td><p>Hee</p></td>
                                <td><p>Seung</p></td>
                                <td><button class="button Red">Review</button></td>
                                
                            </tr>                            
                        </tbody>
                    </table>

                </div>
                </div>
               </div>
            </div>