<?php

if (isset($_POST['username'])&& isset($_POST['username'])){
    function validate($data){
        $data = trim($data);
        $data =  stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;

    }
    $username = validate(['username']);
    $password = validate(['password']);

    if (empty($username)){
        header("Location: login.php?error= User Name is required");
        exit();
    }else if(empty($password)){
        header("Location: login.php?error=Password is required");
        exit();
    }else{
        echo "Valid Input";
    }
    
}else{
    header("Location: login.php");
    exit();
}