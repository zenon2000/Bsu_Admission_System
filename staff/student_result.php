<?php include '../db_conn.php'?>
<!-- Student Result -->

<div id="student-result-content">
    <div class="head-title">
        <div class="left">
            <h1>Student Result</h1>
            <ul class="breadcrumb">
                <li><a href="#">Student Result</a></li>
                <li><i class='bx bx-chevron-right'></i></li>
                <li><a class="active" href="staff.php">Home</a></li>
            </ul>
        </div>
    </div>

    <div class="tabs">
        <button class="tab-button " data-tab="tab1">Notice of Admission</button>
        <button class="tab-button" data-tab="tab2">Notice of Result</button>
        <button class="button send" type="submit">Send</button> <button class="button save" type="submit">Save</button>
      </div>
      
      <div class="tab-content" id="tab1">
       <!--result(NOA)-->
 <div id="student-result-noa">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Student Master List (NOA)</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-noa">
                    <input type="text"id="noa-searchBox" placeholder="Search...">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Application No.</th>
                        <th>College</th>
                        <th>Program</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Sex</th>
                        <th>Age</th>
                        <th>Civil Status</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>GWA</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Rank</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00056</td>
                        <td>CIS</td>
                        <td>BSIT</td>
                        <td>Toge Jugon Inumaki</td>
                        <td>10-03-2003</td>
                        <td>Male</td>
                        <td>20</td>
                        <td>Single</td>
                        <td>Japanese</td>
                        <td>inumakitoge@gmail.com</td>
                        <td>90%</td>
                        <td>90%</td>
                        <td>87%</td>
                        <td>92%</td>
                        <td>56</td>
                       <td>NOA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    </div>
      </div>
      
<div class="tab-content" id="tab2">
        <!--result (NOR)-->
<div id="student-result-nor">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Student Master List (NOR)</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-nor">
                    <input type="text" id="nor-searchBox" placeholder="Search...">
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Application No.</th>
                        <th>College</th>
                        <th>Program</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Sex</th>
                        <th>Age</th>
                        <th>Civil Status</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>GWA</th>
                        <th>Math</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Rank</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000220</td>
                        <td>CIS</td>
                        <td>BSIT</td>
                        <td>Nobara Kugisaki</td>
                        <td>08-07-2004</td>
                        <td>Female</td>
                        <td>18</td>
                        <td>Single</td>
                        <td>Japanese</td>
                        <td>kugisakinobara@gmail.com</td>
                        <td>83%</td>
                        <td>84%</td>
                        <td>80%</td>
                        <td>81%</td>
                        <td>220</td>
                       <td>NOR</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   
</div>
      </div>
      
</div>
