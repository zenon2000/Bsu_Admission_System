var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

document.getElementById('submit-button').addEventListener('click', function () {
    document.getElementById('id-photo').click();
});

document.getElementById('id-photo').addEventListener('change', function () {
    const fileInput = this;
  
    if (fileInput.files.length > 0) {
        const uploadedFile = fileInput.files[0];
        if (uploadedFile.size > 300000) { // 300 KB = 300,000 bytes
            alert('File size exceeds the maximum allowed (300 KB).');
            fileInput.value = ''; // Clear the file input
        } else {
            const img = new Image();
            img.src = URL.createObjectURL(uploadedFile);
            img.onload = function () {
                if (img.width === 602 && img.height === 602) {
                    // The image has the correct dimensions (2x2 inches)
                    const gridItem = document.querySelector('.grid-item');
                    gridItem.innerHTML = ''; // Clear any previous content
                    img.className = 'id-photo-image'; // Add a class to the image
                    gridItem.appendChild(img);

                    // Hide the label with the class "id-photo"
                    document.querySelector('.id-photo').style.display = 'none';
                } else {
                    alert('Please upload a 2x2 (602x602 pixels) ID photo.');
                    fileInput.value = ''; // Clear the file input
                }
            };
        }
    }
});
