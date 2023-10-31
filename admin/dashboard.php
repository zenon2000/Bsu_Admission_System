 <?php
 include '../db_conn.php'
 ?>
 <!--dashboard-->   
                   <div id="dashboard-content">
              <div class="head-title">
                <div class="left">
                    <h1>Dashboard</h1>
                    <ul class="breadcrumb">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li><i class='bx bx-chevron-right'></i></li>
                        <li>
                            <a class="active" href="#">Home</a>
                        </li>
                    </ul>
                </div>
               
             </div>
       
             <ul class="box-info">
                <li id="verified-application">
                    <i class='bx bx-group'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM applicants WHERE status = 'verified'";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>No data</h3>';
                        }
                         ?></h3>
                        <p>Verified Application</p>
                    </span>
                </li>
                <li id="to-be-reviewed">
                    <i class='bx bx-street-view'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM applicants WHERE status = 'unverified'";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>0</h3>';
                        }
                         ?></h3>
                        <p>To Be Reviewed</p>
                    </span>
                </li>
                <li id="results-item">
                    <i class='bx bx-chart' ></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM applicants ";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>No data</h3>';
                        }
                         ?></h3>
                        <p>Results</p>
                    </span>
                </li>
                <li id="faculty-item">
                    <i class='bx bx-user'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM faculty";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>No data</h3>';
                        }
                         ?></h3>
                        <p>Faculty</p>
                    </span>
                </li>
            </ul>


            
 <?php
 $query = "SELECT * FROM applicants where status = 'verified'";
 $query_pending = "SELECT * FROM applicants where status = 'unverified'";
 $query_res= "SELECT * FROM student_result";
 $result1 = mysqli_query($con, $query);
 $result2 = mysqli_query($con, $query_res);
 $result3 = mysqli_query($con, $query_pending);


 ?>
            <!--verified-->
            <div>
                 <div id="verified" class="table-data" style="display: none;">
                   <div class="order">
                    <div class="head">
                        <h3>Verified Application</h3>
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox-verified">
                            <input type="text" placeholder="Search...">
                        </div>
                    </div>                    
                        <table>
                               <th>Application Number</th>
                                <th>College</th>
                                <th>Course</th>
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
                            echo  "<td><p>" .$row['lname']."</p></td>"; 
                            echo  "<td><p>" .$row['fname']."</p></td>"; 
                            echo  "<td><p>" .$row['mname']."</p></td>"; 
                            echo  "<td><p>" .$row['status']."</p></td>";  
                        } ?>
						</tbody>
					</table>

                  </div>
                  </div>
                
                   <!--pending-->
                   <div id="reviewed" class="table-data" >
                    <div class="order">
                        <div class="table-container">
                            <div class="head">
                                <h3>To be reviewed</h3>
                                <i class='bx bx-search' id="searchIcon"></i>
                                <div class="search-box" id="searchBox-reviewed">
                                    <input type="text" placeholder="Search...">
                                </div>
                            </div>
                            
                            <table>
                          
                          
                            <thead>
                                <tr>
                                <th>Application Number</th>
                                <th>College</th>
                                <th>Course</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Status</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                            <?php while ($row = mysqli_fetch_array($result3)){
                           echo' <tr>';
                            echo  "<td><p>" .$row['app_number']."</p></td>"; 
                            echo  "<td><p>" .$row['course']."</p></td>"; 
                            echo  "<td><p>" .$row['lname']."</p></td>"; 
                            echo  "<td><p>" .$row['fname']."</p></td>"; 
                            echo  "<td><p>" .$row['mname']."</p></td>"; 
                            echo  "<td><p>" .$row['status']."</p></td>";  
                        } ?>
                            </tbody>
                        </table>

                    </div>
                    </div>
                   </div>
                   <!--result-->
                   <div id="resultsT" class="table-data" >
                    <div class="order">
                        <div class="head">
                            <h3>Results</h3>
                            <i class='bx bx-search' id="searchIcon"></i>
                            <div class="search-box" id="searchBox-result">
                                <input type="text" placeholder="Search...">
                            </div>
                        </div>
                    <div class="table-container">
                        <table>
                          
                            <thead>
                                <tr>
                                <th>Application Number</th>
                                <th>College</th>
                                <th>Course</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Result</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                            <?php while ($row = mysqli_fetch_array($result2)){
                           echo' <tr>';
                            echo  "<td><p>" .$row['app_number']."</p></td>"; 
                            echo  "<td><p>" .$row['college']."</p></td>"; 
                            echo  "<td><p>" .$row['course']."</p></td>";
                            echo  "<td><p>" .$row['lname']."</p></td>"; 
                            echo  "<td><p>" .$row['fname']."</p></td>"; 
                            echo  "<td><p>" .$row['mname']."</p></td>"; 
                            echo  "<td><p>" .$row['result']."</p></td>";  
                        } ?>
                            </tbody>
                        </table>
                    </div>
                    </div>
                 </div>
        
                   <!--faculty-->
                    <div id="faculty" class="table-data" >
                        <div class="order">
                            <div class="head">
                                <h3>Faculty</h3>
                                <i class='bx bx-search' id="searchIcon"></i>
                                <div class="search-box" id="searchBox-faculty">
                                    <input type="text" placeholder="Search...">
                                </div>
                            </div>
                        <div class="table-container">
                            <table>
                              
                                <thead>
                                    <tr>
                                    <th>Identification Number</th>
                                    <th>College</th>
                                    <th>Department</th>
                                    <th>User Name</th>
                                    <th>Email Address</th>
                                    <th>Password</th>
                                    
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p>0000001</p></td>
                                        <td><p>College of Engineering</p></td>
                                        <td><p>Department of...</p></td>
                                        <td><p>Satoru</p></td>
                                        <td><p>Satorugojo@gmail.com</p></td>
                                        <td><p>Jujutsu_Kaisen</p></td>
                                    </tr>
                                </tbody>
                            </table>
        
                        </div>
                        </div>
                       </div>
                   
                    </div>
                </div>
            </div>
            
       