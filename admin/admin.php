<?php include "header.php"?>
<?php include "side_bar.php"?>
<?php include "nav_bar.php"?>


        <!-- MAIN -->
        <main>
        <?php include "dashboard.php"?>
        <?php include "approved_app.php"?>
        <?php include "manage_sched.php"?>
        <?php include "manage_fac.php"?>
        <?php include "view_request.php"?>
    

            <!--Manage schedule-->   

                </div>
               </div>
            </div>
           

   
		</main>
		<!-- MAIN -->



	</section>
    
	

      <!-- NOTIFICATION container -->
     <div class="notification-popup" id="notification-popup">
        <div class="popup-header">
            <span class="popup-title">Notifications</span>
        </div>
        <div class="popup-content" id="notification-content">
            <div class="notification-item">
                <img src="frontend/assets/images/human icon.png" alt="User Avatar">
                <div class="notification-text">
                    <p><strong>User 1</strong> submitted an application for BACOM admission</p>
                    <span class="timestamp">2 hours ago</span>
                </div>
            </div>
            <div class="notification-item">
                <img src="frontend/assets/images/human icon.png" alt="User Avatar">
                <div class="notification-text">
                    <p><strong>User 2</strong> requested for a copy of addmited BSIT Students</p>
                    <span class="timestamp">5 hours ago</span>
                </div>
            </div>
            <!-- Add more notification items as needed -->
        </div>
    </div>
    
    <!-- Add the profile popup container here -->
   
<!-- Add the profile popup container here -->
<div class="profile-popup" id="profile-popup">
    <!-- Popup content -->
    <div class="popup-content" id="profile-content">
        <div class="profile-header">
            <img src="images/human icon.png" alt="User Profile Picture" class="profile-picture">
            <p class="profile-name">John Doe</p>
        </div>
        <hr>
        <div class="profile-menu">
            <a href="#" id="settings" class="profile-item"><i class='bx bx-cog'></i> Settings</a>
            <a href="#" id="help" class="profile-item"><i class='bx bx-question-mark'></i> Help and Support</a>
            <a href="../logout.php" type="submit" id="logout" class="profile-item"><i class='bx bx-log-out'></i> Logout</a>
        </div>
    </div>
</div>
	
	<!-- CONTENT -->
      <script src="js/admin.js"></script>
      <?php include "footer.php"?>