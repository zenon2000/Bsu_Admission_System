document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll('.data_info form');

    const formNextButtons = document.querySelectorAll('.btn_next');

    let currentFormIndex = 0;

    function validateForm() {
        const currentForm = forms[currentFormIndex];
        const inputs = currentForm.querySelectorAll('input');

        for (let input of inputs) {
            if (input.value.trim() === '') {
                return false;
            }
        }
        return true;
    }

    function showNextForm() {
        if (validateForm()) {
            currentFormIndex++;
            showForm();
        } else {
            alert('Please fill in all fields before proceeding.');
        }
    }

    function showPreviousForm() {
        currentFormIndex--;
        showForm();
    }

    function showForm() {
        for (let i = 0; i < forms.length; i++) {
            if (i === currentFormIndex) {
                forms[i].style.display = 'block';
            } else {
                forms[i].style.display = 'none';
            }
        }

        const allNextButtons = document.querySelectorAll('.btn_next');
        const allBackButtons = document.querySelectorAll('.btn_back');
        const allDoneButtons = document.querySelectorAll('.btn_done');

        for (let i = 0; i < allNextButtons.length; i++) {
            if (currentFormIndex === 0) {
                allBackButtons[i].style.display = 'none';
            } else {
                allBackButtons[i].style.display = 'inline-block';
            }

            if (currentFormIndex === forms.length - 1) {
                allNextButtons[i].style.display = 'none';
                allDoneButtons[i].style.display = 'inline-block';
            } else {
                allNextButtons[i].style.display = 'inline-block';
                allDoneButtons[i].style.display = 'none';
            }
        }
    }

    for (let i = 0; i < formNextButtons.length; i++) {
        formNextButtons[i].addEventListener('click', showNextForm);
    }

    const formBackButtons = document.querySelectorAll('.btn_back');
    for (let backButton of formBackButtons) {
        backButton.addEventListener('click', showPreviousForm);
    }

    showForm();
});
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