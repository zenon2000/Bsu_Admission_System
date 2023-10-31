<?php
 if (isset($_POST['uname']) &&  isset($_POST['pass']) &&  isset($_POST['role'])){

    include "../db_conn.php";

    $uname = $_POST['uname'];
    $pass = $_POST['pass'];
    $role = $_POST['role'];

    if(empty($uname)){
        $em = "User name is required";
        header("Location:../login.php?error=$em");
        exit;
    }else if (empty($pass)){
        $em = "Password is required";
        header("Location:../login.php?error=$em");
        exit;
    }else {
        if($role == '1'){
            $sql = "SELECT * FROM admin WHERE uname = ?";
            $role = "Admin";        
        }else if($role == '2'){
            $sql = "SELECT * FROM faculty WHERE uname = ?";
            $role = "Faculty";
        }else{
            $sql = "SELECT * FROM staff WHERE uname = ?";
            $role = " Staff";
        }
    }

    

 }else{

    header("Location: ../login.php");
    exit; 
 }

?>