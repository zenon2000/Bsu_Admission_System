<?php
 $query = "SELECT * FROM student_result ";
 $query_slots= "SELECT * FROM slots";
 $query_noa= "SELECT * FROM student_result WHERE result = 'NOA'";
 $query_nor= "SELECT * FROM student_result WHERE result = 'NOR'";
 $result1 = mysqli_query($con, $query);
 $result2 = mysqli_query($con, $query_slots);
 $result3 = mysqli_query($con, $query_noa);
 $result4 = mysqli_query($con, $query_nor);



 ?>

 <!--over-all-->
 <div id="over-all">
            <div class="table-data">
                <div class="order">
                    <div class="head">
                        <h3>Student Lists</h3>
                        <i class='bx bx-search' id="searchIcon"></i>
                        <div class="search-box" id="searchBox-overall">
                            <input type="text"  id="overall-searchBox" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                    <colgroup>
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 20%;">
                            <col style="width: 5%;">
                            <col style="width: 15%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>College<br>
                                <select class="custom-dropdown">
                                        <option value="none">College</option>
                                        <option value="CA">College of Agriculture</option>
                                        <option value="CAH">College of Arts & Humanities</option>
                                        <option value="CEAT">College of Engineering & Applied Technology</option>
                                        <option value="CF">College of Forestry</option>
                                        <option value="CHET">College of Home Economics & Technology</option>
                                        <option value="CHK">College of Human Kinetics</option>
                                        <option value="CIS">College of Information Sciences</option>
                                        <option value="CNS">College of Natural Sciences</option>
                                        <option value="CN">College of Nursing</option>
                                        <option value="CNAS">College of Numeracy & Applied Sciences</option>
                                        <option value="CPAG">College of Public Administration & Governance</option>
                                        <option value="CSS">College of Social Sciences</option>
                                        <option value="CTE">College of Teacher Education</option>
                                        <option value="CVM">College of Veterinary Medicine</option>
                                      </select>
                            </th>
                                <th>Program
                                <br>
                                    <select class="custom-dropdown">
                                        <option value="none">Program</option>
                                        <option value="CIS">Bachelor of Library and Information Science</option>
                                        <option value="CIS">Bachelor of Science in Development Communication</option>
                                        <option value="CIS">Bachelor of Science in Information Technology</option>
                                      </select>
                                </th>
                                <th>Major
                                <br>
                                    <select class="custom-dropdown">
                                        <option value="none">Major</option>
                                        <option value="CIS">Bachelor of Library and Information Science</option>
                                        <option value="CIS">Bachelor of Science in Development Communication</option>
                                        <option value="CIS">Bachelor of Science in Information Technology</option>
                                      </select>
                                </th>
                                <th>Student</th>
                                <th>Age</th>
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
                            <input type="text" id="available-searchBox" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr  data-college="CIS">
                                <th>College
                                br>
                                    <select class="custom-dropdown">
                                        <option value="none">College</option>
                                        <option value="CA">College of Agriculture</option>
                                        <option value="CAH">College of Arts & Humanities</option>
                                        <option value="CEAT">College of Engineering & Applied Technology</option>
                                        <option value="CF">College of Forestry</option>
                                        <option value="CHET">College of Home Economics & Technology</option>
                                        <option value="CHK">College of Human Kinetics</option>
                                        <option value="CIS">College of Information Sciences</option>
                                        <option value="CNS">College of Natural Sciences</option>
                                        <option value="CN">College of Nursing</option>
                                        <option value="CNAS">College of Numeracy & Applied Sciences</option>
                                        <option value="CPAG">College of Public Administration & Governance</option>
                                        <option value="CSS">College of Social Sciences</option>
                                        <option value="CTE">College of Teacher Education</option>
                                        <option value="CVM">College of Veterinary Medicine</option>
                                      </select>
                                </th>
                                <th>Program
                                <br>
                                    <select class="custom-dropdown">
                                        <option value="none">Program</option>
                                        <option value="CIS">Bachelor of Library and Information Science</option>
                                        <option value="CIS">Bachelor of Science in Development Communication</option>
                                        <option value="CIS">Bachelor of Science in Information Technology</option>
                                      </select>
                                </th>
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
                            <input type="text" id="admitted-searchBox" placeholder="Search...">
                        </div>
                    </div>
                    <table>
                    <colgroup>
                            <col style="width: 22%;">
                            <col style="width: 22%;">
                            <col style="width: 10%;">
                            <col style="width: 15%;">
                            <col style="width: 15%;">
                            <col style="width: 6%;">
                            <col style="width: 10%;">
                        </colgroup>
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
                        <?php while ($row = mysqli_fetch_array($result3)){
                           echo '<tr>';
                            echo  "<td><p>" .$row['college']."</p></td>"; 
                            echo  "<td><p>" .$row['course']."</p></td>"; 
                            echo  "<td><p>" .$row['lname']."</p></td>"; 
                            
                        echo'</tr>';
                        } ?>
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
                                <input type="text" id="readmitted-searchBox" placeholder="Search...">
                            </div>
                        </div>
                        <table>
                        <colgroup>
                                <col style="width: 22%;">
                                <col style="width: 22%;">
                                <col style="width: 10%;">
                                <col style="width: 15%;">
                                <col style="width: 15%;">
                                <col style="width: 6%;">
                                <col style="width: 10%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>College</th>
                                    <th>Program</th>
                                    <th>Application No.</th>
                                    <th>Student</th>
                                    <th>Email</th>
                                    <th>Rank</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php while ($row = mysqli_fetch_array($result4)){
                                echo '<tr data-college = "CIS">';
                                    echo  "<td><p>" .$row['college']."</p></td>"; 
                                    echo  "<td><p>" .$row['course']."</p></td>";
                                    echo  "<td><p>" .$row['app_number']."</p></td>"; 
                                    echo  "<td><p>" .$row['lname']."</p></td>";
                                    echo  "<td><p>" .$row['email']."</p></td>";
                                    echo  "<td><p>" .$row['rank']."</p></td>";
                                    echo  "<td><p>" .$row['result']."</p></td>"; 
                                    
                                echo'</tr>';
                                } ?>
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
                    <input type="text" id="nonqualified-searchBox" placeholder="Search...">
                </div>
            </div>
            <table>
            <colgroup>
                    <col style="width: 22%;">
                    <col style="width: 22%;">
                    <col style="width: 10%;">
                    <col style="width: 15%;">
                    <col style="width: 15%;">
                    <col style="width: 6%;">
                    <col style="width: 10%;">
                </colgroup>
                <thead>
                    <tr>
                        <th>College</th>
                        <th>Program</th>
                        <th>Application No.</th>
                        <th>Student</th>
                        <th>Email</th>
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
                        <td>000500</td>
                        <td>YuJi Itadori</td>
                        <td>itadoriyuji@gmail.com</td>
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
                    <input type="text" id="form-searchBox" placeholder="Search...">
                </div>
            </div>
            <table>
            <colgroup>
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                </colgroup>
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
       