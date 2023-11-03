function handleForm(event) {
    event.preventDefault();

    // Retrieve and store all form data in localStorage
    const lastName = document.getElementById('last_name').value;
    const firstName = document.getElementById('first_name').value;
    const middleName = document.getElementById('middle_name').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const city = document.getElementById('birthplace-municipality').value;
    const birthprovince = document.getElementById('birthplace-province').value;
    const country = document.getElementById('birthplace_country').value;
    const age = document.getElementById('age').value;
    const civilStatus = document.getElementById('civil_status').value;
    const citizenship = document.getElementById('citizenship').value;
    const nationality = document.getElementById('nationality').value;
    const houseStreet = document.getElementById('house_street').value;
    const barangaySubdivision = document.getElementById('barangay_subdivision').value;
    const municipalityCity = document.getElementById('municipality_city').value;
    const province = document.getElementById('province').value;
    const countryState = document.getElementById('country_state').value;
    const zipCode = document.getElementById('zip_code').value;
    const phone = document.getElementById('phone').value;
    const facebook = document.getElementById('facebook').value;
    const email = document.getElementById('email').value;
    const contactPersonName = document.getElementById('contact_person_1').value;
    const contactPersonMobile = document.getElementById('contact_person_1_mobile').value;
    const relationship = document.getElementById('relationship_1').value;
    const contactPerson2Name = document.getElementById('contact_person_2').value;
    const contactPerson2Mobile = document.getElementById('contact_person_2_mobile').value;
    const relationship2 = document.getElementById('relationship_2').value;

    // Store data in localStorage
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('middleName', middleName);
    localStorage.setItem('gender', gender);
    localStorage.setItem('birthdate', birthdate);
    localStorage.setItem('city', city);
    localStorage.setItem('birthprovince', birthprovince);
    localStorage.setItem('country', country);
    localStorage.setItem('age', age);
    localStorage.setItem('civilStatus', civilStatus);
    localStorage.setItem('citizenship', citizenship);
    localStorage.setItem('nationality', nationality);
    localStorage.setItem('houseStreet', houseStreet);
    localStorage.setItem('barangaySubdivision', barangaySubdivision);
    localStorage.setItem('municipalityCity', municipalityCity);
    localStorage.setItem('province', province);
    localStorage.setItem('countryState', countryState);
    localStorage.setItem('zipCode', zipCode);
    localStorage.setItem('phone', phone);
    localStorage.setItem('facebook', facebook);
    localStorage.setItem('email', email);
    localStorage.setItem('contact_person_1', contactPersonName);
    localStorage.setItem('contact_person_1_mobile', contactPersonMobile);
    localStorage.setItem('relationship_1', relationship);
    localStorage.setItem('contact_person_1', contactPersonName);
    localStorage.setItem('contact_person_1_mobile', contactPersonMobile);
    localStorage.setItem('relationship_1', relationship);
    localStorage.setItem('contact_person_2', contactPerson2Name);
    localStorage.setItem('contact_person_2_mobile', contactPerson2Mobile);
    localStorage.setItem('relationship_2', relationship2);

    // Retrieve and save the ID picture
    const fileInput = document.getElementById('id_picture');
    if (fileInput.files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const idPictureData = e.target.result;
            localStorage.setItem('id_picture', idPictureData);

            // Redirect to the result page
            window.location.href = 'result.html';
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        // If no ID picture uploaded, still redirect to the result page
        window.location.href = 'result.html';
    }
}

