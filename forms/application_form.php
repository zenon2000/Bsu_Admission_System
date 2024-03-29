
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admission Application</title>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="icon" href="images/BSU Logo1.png" type="image/x-icon">
    <link rel="stylesheet" href="css/a.css">

</head>


<body>

      
    <header class="header">
        <div class="logo-brand-container">
            <div class="logo">
                <img src="frontend/assets/images/BSU Logo1.png" alt="Logo">
            </div>
            <div class="brand">
                <p>Republic of the Philippines</p>
                <h1 style="font-family: algerian;">BENGUET STATE UNIVERSITY</h1>
                <p><i>OFFICE OF UNIVERSITY REGISTRAR</i></p>
                <p>La Trinidad, Benguet</p>
            </div>
        </div>
    </header>
    <!--Form 1-->
    <form id="myForm" action="" method="post" autocomplete="off" enctype="multipart/form-data">

        <div class="progress-bar">
            <span class="step" id="step-1">1</span>
            <span class="step-connector"></span>
            <span class="step" id="step-2">2</span>
            <span class="step-connector"></span>
            <span class="step" id="step-3">3</span>
            <span class="step-connector"></span>
            <span class="step" id="step-4">4</span>
        </div>

        <div class="tab" id="tab-1">
            <h1 align="center">GENERAL GUIDELINES</h1>
        
            <p>Read and understand the Admission Guidelines and requirements before proceeding to the next step.</p>
            <p>Fill out all the fields completely and accurately in this application form for admission.</p>
           
            <label class="checkbox-container">
                <input type="checkbox" id="read-guidelines" required>
                <span class="checkmark"></span> I have read all the guidelines.
            </label>
        
           
        
            <div class="index-btn-wrapper">
                <div class="index-btn" onclick="run(1, 2);">Next</div>
            </div>
        </div>
        

<!--Form 2-->
<div class="tab" id="tab-2">
    <h2 align="center">APPLICATION FOR ADMISSION</h2>

    <div id="id_picture_preview_container">
        <div>
            <img id="id_picture_preview_img">
        </div>
        <div id="upload-instructions">
            <p><strong>SUBMIT RECENT 2"x 2" ID PICTURE</strong> (clear/standard photo) with white background and name tag <i>(Signature over printed name)</i></p>
        </div>
    </div>

    <p>Contact Info:</p>
    <input type="text" placeholder="Name" name="name" autocomplete="name" required> <!-- Add the name input field -->
    <input type="text" placeholder="Email" name="email" autocomplete="email" required>
    <input type="text" placeholder="Phone" name="phone" autocomplete="phone" required>

    <input type="file" name="id_picture" id="id_picture" accept="image/*" style="display: none">

    <br><br>

    <p>E-Signature:</p>
    <div id="signature-pad" class="signature-pad">
        <canvas></canvas>
        <button class="clear-signature" id="clear-signature">Clear</button>
    </div>

    <br><br>
    <div class="index-btn-wrapper">
        <div class="index-btn" onclick="run(2, 1);">Previous</div>
        <div class="index-btn" onclick="run(2, 3);">Next</div>
    </div>
</div>

    
    <!--Form 3-->
<div class="tab" id="tab-3">
    <h2 align="center"> ACKNOWLEDGEMENT SLIP OF APPLICATION FOR ADMISSION</h2>
    <p>Birthday:</p>
    <input type="text" placeholder="dd" name="dd">
    <input type="text" placeholder="mm" name="mm">
    <input type="text" placeholder="yy" name="yy">
    
    <p>Applicant's E-Signature:</p>
    <div id="applicant-signature-pad" class="signature-pad">
        <canvas></canvas>
        <button class="clear-signature" id="clear-applicant-signature">Clear</button>
    </div>

    <div class="index-btn-wrapper">
        <div class="index-btn" onclick="run(3, 2);">Previous</div>
        <div class="index-btn" onclick="run(3, 4);">Next</div>
    </div>
</div>
<div class="tab" id = "tab-4">
    <div class="index-btn-wrapper">
      <div class="index-btn" onclick="run(4, 3);">Previous</div>
      <button class = "index-btn" type="submit" name="submit" style = "background: blue;">Submit</button>
      

    </div>
  </div>

    </form>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script>
        document.getElementById('myForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // Create a new jsPDF instance
            const doc = new jsPDF();
            // Capture and add content of tab-1
            captureTabAndAddToPDF('tab-1', doc);

            // Capture and add content of tab-2
            captureTabAndAddToPDF('tab-2', doc);

            // Capture and add content of tab-3
            captureTabAndAddToPDF('tab-3', doc);

            // Output the PDF to a data URL
            const pdfContent = doc.output('datauristring');

            // Display the combined PDF in the specified <div>
            document.getElementById('pdfContent').innerHTML = '<iframe width="100%" height="500px" src="' + pdfContent + '"></iframe>';
        });
    </script>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.5.3/signature_pad.min.js"></script>


<script src="js/a.js"></script>

 
</body>
</html>