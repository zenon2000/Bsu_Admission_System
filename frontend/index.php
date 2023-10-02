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
    <header>
        <h2 class="logo"> Benguet State University</h2>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">Admission</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button class="btnLogin-popup">Login</button>
        </nav>        
    </header>
    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span>
            <!--Login-->
            <div class="form-box login">
                <h2>Login</h2>
                <form action="">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-unread"></ion-icon></span>
                        <input type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label for=""><input type="checkbox">Remember me</label>
                        <a href="">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="login-register">
                        <p>Not yet Signed Up? <a href="" class="register-link" >Register</a></p>
                    </div>
                </form>
            </div>
            <!--Register-->
            <div class="form-box register">
                <h2>Registration</h2>
                <form action="">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="text" required>
                        <label for="">Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail-unread"></ion-icon></span>
                        <input type="email" required>
                        <label for="">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required>
                        <label for="">Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label for=""><input type="checkbox">I agree to the Terms & Conditions</label>
                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div class="login-register">
                        <p>Already Signed Up? <a href="" class="login-link">Login</a></p>
                    </div>
                </form>
            </div>
         </div>
        </div>
    <script type="" src="frontend/login.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>