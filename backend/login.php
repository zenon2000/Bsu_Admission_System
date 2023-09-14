<?php
if ($_SERVER ["REQUEST_METHOS"]=== "POST"){
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];
    $email = $_POST["email"];

    try{
        require_once 'dbh.inc.php';
        
    }
}