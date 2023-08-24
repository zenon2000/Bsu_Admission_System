<?php
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>Benguet State University- Online Admission</title>
    
    <!-- Additional CSS Files -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css">

    <link rel="stylesheet" href="assets/css/student.css">
    <script>
      function openNav(navName){
        var i;
        var x=document.getElementsByClassName("nav");

        for(i = 0; i< x.length;i++){
          x[i].style.display="none;"
        }
        document.getElementById(navName).style.display= "block" 
      }
    </script>

    </head>
    
    <body>
    
    <!-- ***** Preloader Start ***** -->
    <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- ***** Preloader End ***** -->
    
    
    <!-- ***** Header Area Start ***** -->
    <header>
    <div class="container">
      <div class="row">
          <div class="jumbotron text-center" style="margin-bottom: 0;">
            <a href="#top" class="banner"><img src="assets/images/logo_1-removebg-preview.png" alt="bsu-logo"></a>               
          </div>
          <div class="col-12">
            <ul class="nav-items">
              <li><a href="#profile" onclick="openNav('profile')" class="active"><i class="fa fa-home"></i></a></li>
              <li><a href="#docs" onclick="openNav('docs')"><i class="fa fa-folder"></i></a></li>
              <li><a href="announce" onclick="openNav('announce')"><i class="fa fa-download"></i></a></li>
              <li><a href="notice" onclick="openNav('notice')"><i class="fa fa-bell"></i></a></li>
              <li><a href="FAQ" onclick="openNav('faq')">FAQ</a></li>
              <li><a href="landing.html"><i class="fa fa-cog"></i></a></li>
              <li class="search-container">
                <input type="text" placeholder="Search...">
                <button type="submit" class="search-button"><i class="fa fa-search" ></i></button>
              </li>
            </ul>  
          </div>
        </div>                  
      </div>
    </div>
  </header>



  
    <!--Profile-->
    <section id="profile">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h2><a href="" class="active">Profile</a></h2>
          <h3>Name:</h3>
          <h3>Account Number:</h3>
          <div><i class="fa fa-user-circle-o"></i></div>
        </div>
        <div class="col-sm-8">
          <h2>Status</h2>
          <p>Complete</p>
        </div>
      </div>
    </div>
  </section>
    <!--Profile END-->
    <div id="docs" class="nav-items">
      <h2><a href="">Documents</a></h2>
    </div>
    <div id="announce" class="nav-items">
      <h2><a href="">Announcement</a></h2>
    </div>

    <div id="notice" class="nav-items">
      <h2><a href="">Notice</a></h2>
    </div>
    <div id="faq" class="nav-items">
      <h2><a href="">FAQ</a></h2>
    </div>

    <div><!--Appointment--></div>

    <!--Footer-->
    <section id="#footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div>
              <ul class="social-items">
                <li><a href=""><i class=" fa fa-facebook"></i></a></li>
                <li><a href=""><i class=" fa fa-twitter"></i></a></li>
                <li><a href=""><i class=" fa fa-google-plus"></i></a></li>
                <li><a href=""><i class=" fa fa-instagram"></i></a></li>
                <li><a href=""><i class=" fa fa-phone"></i></a></li>
              </ul>
            </div> 
        </div>
      </div>
    </section>
<!--End of other forms-->
    <!-- jQuery -->
    <script src="assets/js/jquery-2.1.0.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/js/popper.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Plugins -->
    <script src="assets/js/scrollreveal.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/imgfix.min.js"></script> 
    <script src="assets/js/mixitup.js"></script> 
    <script src="assets/js/accordions.js"></script>
    
    <!-- Global Init -->
    <script src="assets/js/custom.js"></script>

  </body>
</html>
?>