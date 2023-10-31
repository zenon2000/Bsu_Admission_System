<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benguet State University Admission</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/registration.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    
    <title> Login form </title>
</head>
<body>
    <div class="container">
    <h1 class="form-title">Registration Form</h1>
            <form action="" method= "post">
                <div class="user-input-box">
                    <i class="uil uil-user"></i>
                       <input id="username" type="text" required placeholder="Enter your Username" name="uname" >
                        
                    </div>
                    <div class="input-field">
                        <input id="email" type="text" required placeholder="Enter your email adress" name="email" >
                        <i class="uil uil-envelope"></i>
                    </div>
                    <div class="input-field">
                        <input id="password" type="password" class="password" required placeholder="Enter your password" name="pass">
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div class="input-field">
                        <input id="password" type="password" class="password" required placeholder="Confirm your password" name="cpass">
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div class="input-field">
                        <select name="role">
                            <option value="1">Admin</option>
                            <option value="2">Faculty</option>
                            <option value="3">Staff</option>
                            
                        </select>
                    </div>

                    <span class="title">Personal information</span>
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="lName">Last name </label>
            <input type="text"
                    id="lName"
                    name="lName"
                    placeholder="Last name"
                    required />

                    <label for="fName">First name </label>
            <input type="text"
                    id="fName"
                    name="fName"
                    placeholder="First name"
                    required />
                    <label for="mName">Middle name </label>
            <input type="text"
                    id="mName"
                    name="mName"
                    placeholder="Middle name"
                    required />
          </div>
          <div class="user-input-box">
            <label for="civilStatus">Civil Status</label>
            <select id="civilStatus" name="civilStatus" class="gender-category" required>
                <option value=""disabled selected>Select Civil Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="widowed">Widowed</option>
                <option value="separated">Separated</option>
                <option value="divorced">Divorced</option>
           
            </select>
        </div>
          <div class="user-input-box">
            <label for="birthdate">Birthdate</label>
            <input type="date" id="birthdate" name="birthdate" required />
          </div>
          <div class="user-input-box">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Enter Address" required />
          </div>
          <div class="user-input-box">
            <label for="position">Position</label>
            <input type="text" id="position" name="position" placeholder="Enter Position" required />
          </div>
          <div class="user-input-box">
            <label for="idNumber">ID Number</label>
            <input type="text" id="idNumber" name="idNumber" placeholder="Enter ID Number" required />
          </div>
          <div class="user-input-box">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div class="user-input-box">
            <label for="gender">Gender</label>
            <select id="gender" name="gender" class="gender-category" required>
                <option value=""disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>
        </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="termCon">
                            <label for="termCon" class="text">I Accepted all terms and conditions</label>
                        </div>

                    </div>
                    <div class="form-submit-btn">
                        <input type="submit" value="Register">
                        </div>

                <div class="login-signup">
                    <span class="text">Already a member?
                        <a href="login.php" class="text login-link"> Login Now</a>
                    </span>
                </div>
            </div>
            </form>
        </div>
    </div>
    <script src="js/login.js"></script>

    <?php include "footer.php" ?>
