<?php
 $query = "SELECT * FROM applicants ";
 $query_slots= "SELECT * FROM slots";
 $query_res= "SELECT * FROM student_result";
 $result1 = mysqli_query($con, $query);
 $result2 = mysqli_query($con, $query_slots);



 ?>


        <!--over-all-->
        <div id="over-all">
            <div class="table-data">
                <div class="order">
                    <div class="head">
                        <h3>Student Lists</h3>
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox-overall">
                            <input type="text" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>College</th>
                                <th>Program</th>
                                <th>Lastname</th>
                                <th>Firstname</th>
                                <th>Middlename</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php while ($row = mysqli_fetch_array($result1)){
                           echo' <tr>';
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
         <!--Available Slots-->
         <div id="available-slot">
            <div class="table-data">
                <div class="order">
                    <div class="head">
                        <h3>Available Slots</h3>
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox-available">
                            <input type="text" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr  data-college="CIS">
                                <th>College</th>
                                <th>Program</th>
                                <th>Total Slots</th>
                                <th>Available Slots</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php while ($row = mysqli_fetch_array($result2)){
                           echo '<tr>';
                            echo  "<td><p>" .$row['college']."</p></td>"; 
                            echo  "<td><p>" .$row['course']."</p></td>"; 
                            echo  "<td><p>" .$row['total_slots']."</p></td>"; 
                            echo  "<td><p>" .$row['slots_available']."</p></td>"; 
                        echo'</tr>';
                        } ?>
						</tbody>
					</table>
				</div>
			</div>
        </div>
        
         <!--Admitted-->
         <div id="admitted">
            <div class="table-data">
                <div class="order">
                    <div class="head">
                        <h3>Students For Admission</h3>
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox-admitted">
                            <input type="text" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>College</th>
                                <th>Programs</th>
                                <th>Student</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  data-college="CIS">
                                <td>
                                    <p>College of Information Sciences</p>
                                </td>
                                <td>Bachelor of Science in Information Technology</td>
                                <td>Gojo Satoru</td>
                                <td>1</td>
                                <td>Notice of Admission</td>
                            </tr>
						</tbody>
					</table>
				</div>
			</div>
            </div>
             <!--Readmitted-->
             <div id="readmitted">
                <div class="table-data">
                    <div class="order">
                        <div class="head">
                            <h3>Students For Readmission</h3>
                            <i class='bx bx-search' id="searchIcon"></i>
                            <div class="search-box" id="searchBox-readmitted">
                                <input type="text" placeholder="Search...">
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>College</th>
                                    <th>Program</th>
                                    <th>Student</th>
                                    <th>Rank</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr data-college="CIS">
                                    <td>
                                        <p>College of Information Sciences</p>
                                    </td>
                                    <td>Bachelor of Science in Information Technology</td>
                                    <td>Megumi Fushiguro</td>
                                    <td>101</td>
                                    <td>Notice of Result</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>

 <!--Nonqualified-->
 <div id="nonqualified">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Non-Qualified Applicants</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-nonqualified">
                    <input type="text" placeholder="Search...">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>College</th>
                        <th>Program</th>
                        <th>Student</th>
                        <th>Rank</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-college="CIS">
                        <td>
                            <p>College of Information Sciences</p>
                        </td>
                        <td>Bachelor of Science in Information Technology</td>
                        <td>YuJi Itadori</td>
                        <td>500</td>
                        <td>Notice of Result</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>

 <!--Form-->
 <div id="form">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Forms</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-form">
                    <input type="text" placeholder="Search...">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Application Form</th>
                        <th>Announcements</th>
                        <th>Notice Of Admission</th>
                        <th>Notice Of Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>view</td>
                        <td>view</td>
                        <td>view</td>
                        <td>view</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
