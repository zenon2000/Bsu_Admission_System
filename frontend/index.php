<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benguet State University Admission</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="container">
        <div class="forms">
            <div class="form login">
                <span class="title">Login</span>

                <form action="index.php" method="post">
                    <div class="input-field">
                        <input type="text" name="username" placeholder="Enter your username" required>
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" name="password" class="password" placeholder="Enter your password" required>
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div class="checkbox-text">
                        <div class="checkbox-content">
                            <input type="checkbox" id="logCheck">
                            <label for="logCheck" class="text">Remember me</label>
                        </div>

                        <a href="#" class="text">Forgot password?</a>
                    </div>
                    <div class="input-field button">
                       <button><input type="submit" name="login" value="Login"></button> 
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="assets/js/script.js"></script>
</body>
</html>