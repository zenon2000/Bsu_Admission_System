<?php include '../db_conn.php'?>
<div id="dashboard-content">
            <div class="head-title">
                <div class="left">
                    <h1>Dashboard</h1>
                    <ul class="breadcrumb">
                        <li><a href="#">Dashboard</a></li>
                        <li><i class='bx bx-chevron-right'></i></li>
                        <li><a class="active" href="#">Home</a></li>
                    </ul>
                </div>
            </div>

            <ul class="box-info">
                <li id="available-box">
                    <i class='bx bx-clipboard'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM slots";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>No data</h3>';
                        }
                         ?></h3>
                        <p>Available Slots</p>
                    </span>
                </li>                
                
                <li id="admitted-box">
                    <i class='bx bxs-group'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM student_result WHERE result ='NOA'";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>No data</h3>';
                        }
                         ?></h3>
                        <p>Students For Admission</p>
                    </span>
                </li>

                <li id="readmitted-box">
                    <i class='bx bx-user-check'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM student_result WHERE result ='NOR'";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>0</h3>';
                        }
                         ?></h3>
                        <p>Students For Readmission</p>
                    </span>
                </li>

                <li id="nonqualified-box">
                    <i class='bx bxs-user-x'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM student_result WHERE result ='NQA'";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>0</h3>';
                        }
                         ?></h3>
                        <p>Non-Qualified Applicants</p>
                    </span>
                </li>

                <li id="form-box">
                    <i class='bx bxs-notepad'></i>
                    <span class="text">
                        <h3><?php $veri_app_query ="SELECT * FROM created_forms";
                        $veri_app_query_run = mysqli_query($con, $veri_app_query);
                        if($app_total = mysqli_num_rows($veri_app_query_run)){

                            echo '<h3>'.$app_total.'</h3>';
                        }else{
                            echo '<h3>0</h3>';
                        }
                         ?></h3>
                        <p>Forms</p>
                    </span>
                </li> 
            </ul>