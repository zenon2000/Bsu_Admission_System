<?php
  session_start();
  if (isset($_SESSION['ID'])) {
      header("Location:admin.php");
      exit();
  }
    
  include_once('db_conn.php');
  
  if (isset($_POST['submit'])) {
      $errorMsg = "";
      $username = $con->real_escape_string($_POST['username']);
      $password = $con->real_escape_string(md5($_POST['password']));
      
  if (!empty($username) || !empty($password)) {
        $query  = "SELECT * FROM masterlogin WHERE uname = '$username'";
        $result = $con->query($query);
        if($result->num_rows > 0){
            $row = $result->fetch_assoc();
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = $row['role'];
            $_SESSION['uname'] = $row['uname'];
            if($row['role'] == 'admin'){
              header("Location:admin/admin.php");
              die();  
            }else if ($row['role'] == 'staff'){
              header("Location:staff/staff.php");
              die();

            }
                            
        }else{
          $errorMsg = "No user found on this username";
        } 
    }else{
      $errorMsg = "Username and Password is required";
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>OUR- Admission Management System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
<div class="card text-center" style="padding:20px;">
<h3>OUR- Admission Management System</h3>
</div><br>
<div class="container">
  <div class="row">
    <div class="col-md-3"></div>
      <div class="col-md-6">
        <?php if (isset($errorMsg)) { ?>
          <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <?php echo $errorMsg; ?>
          </div>
        <?php } ?>
        <form action="" method="POST">
          <div class="form-group">  
            <label for="username">Username:</label> 
            <input type="text" class="form-control" name="username" placeholder="Enter Username" >
          </div>
          <div class="form-group">  
            <label for="password">Password:</label> 
            <input type="password" class="form-control" name="password" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <p>Not registered yet ?<a href="registration.php"> Register here</a></p>
            <input type="submit" name="submit" class="btn btn-success" value="Login"> 
          </div>
        </form>
      </div>
  </div>
</div>
</body>
</html>
