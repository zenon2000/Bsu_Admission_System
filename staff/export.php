
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

 <!--export-->
 <div id="student-result-nor">
    <div class="table-data">
        <div class="order">
            <div class="head">
                <h3>Student Master List</h3>
                <i class='bx bx-search' id="searchIcon"></i>
                <div class="search-box" id="searchBox-form">
                    <input type="text" placeholder="Search...">
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
                        <td>000001</td>
                        <td>CIS</td>
                        <td>BSIT</td>
                        <td>Nobara Kugisaki</td>
                        <td>08-07-2004</td>
                        <td>Female</td>
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
  <button class="button export" onclick="exportToExcel()">Export to Excel</button>
</div>
