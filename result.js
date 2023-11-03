document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage and display it in the result page
    const lastName = localStorage.getItem('lastName');
    const firstName = localStorage.getItem('firstName');
    const middleName = localStorage.getItem('middleName');
    const gender = localStorage.getItem('gender');
    const birthdate = localStorage.getItem('birthdate');
    const city = localStorage.getItem('city');
    const birthprovince = localStorage.getItem('birthprovince'); // Updated variable name
    const country = localStorage.getItem('country');
    const age = localStorage.getItem('age');
    const civilStatus = localStorage.getItem('civilStatus');
    const citizenship = localStorage.getItem('citizenship');
    const nationality = localStorage.getItem('nationality');
    const street = localStorage.getItem('houseStreet');
    const barangay = localStorage.getItem('barangaySubdivision');
    const municipality = localStorage.getItem('municipalityCity');
    const province = localStorage.getItem('province');
    const countryState = localStorage.getItem('countryState'); // Updated variable name
    const zipCode = localStorage.getItem('zipCode');
    const telephone = localStorage.getItem('phone');
    const facebook = localStorage.getItem('facebook');
    const email = localStorage.getItem('email');
    const contactPersonName = localStorage.getItem('contact_person_1');
    const contactPersonMobile = localStorage.getItem('contact_person_1_mobile');
    const relationship = localStorage.getItem('relationship_1');
      // Update the DOM elements for Contact Person 1
      if (contactPersonName && contactPersonMobile && relationship) {
        document.getElementById('result-ContactOne').textContent = contactPersonName;
        document.getElementById('result-NumberOne').textContent = contactPersonMobile;
        document.getElementById('result-RelationshipOne').textContent = relationship;
    } else {
        // Handle case where data is not available in localStorage
        console.log('Emergency contact person details not found in localStorage');
    }
   
    const contactPerson2Name = localStorage.getItem('contact_person_2');
    const contactPerson2Mobile = localStorage.getItem('contact_person_2_mobile');
    const relationship2 = localStorage.getItem('relationship_2');

    if (contactPerson2Name && contactPerson2Mobile && relationship2) {
        document.getElementById('result-ContactTwo').textContent = contactPerson2Name;
        document.getElementById('result-NumberTwo').textContent = contactPerson2Mobile;
        document.getElementById('result-RelationshipTwo').textContent = relationship2;
    } else {
        console.log('Emergency contact person 2 details not found in localStorage');
    }
    // Display the retrieved data on the result page

    document.getElementById('result-LastName').textContent = lastName;
    document.getElementById('result-FirstName').textContent = firstName;
    document.getElementById('result-MiddleName').textContent = middleName;
    document.getElementById('result-Gender').textContent = gender;
    document.getElementById('result-Birthdate').textContent = birthdate;
    document.getElementById('result-City').textContent = city;
    document.getElementById('result-BirthProvince').textContent = birthprovince;
    document.getElementById('result-BirthCountry').textContent = country;
    document.getElementById('result-Age').textContent = age;
    document.getElementById('result-Civil').textContent = civilStatus;
    document.getElementById('result-Citizenship').textContent = citizenship;
    document.getElementById('result-Nationality').textContent = nationality;
    document.getElementById('result-Street').textContent = street;
    document.getElementById('result-Barangay').textContent = barangay;
    document.getElementById('result-Municipality').textContent = municipality;
    document.getElementById('result-PermanentProvince').textContent = province;
    document.getElementById('result-PermanentCountry').textContent = countryState;
    document.getElementById('result-ZipCode').textContent = zipCode;
    document.getElementById('result-Telephone').textContent = telephone;
    document.getElementById('result-Facebook').textContent = facebook;
    document.getElementById('result-Email').textContent = email;
 
    // Retrieve and display the ID picture if available
    const idPicture = localStorage.getItem('id_picture');
    if (idPicture) {
        const img = document.createElement('img');
        img.src = idPicture;
        img.style.width = '200px'; // Adjust the size if needed
        document.getElementById('result-id-picture').appendChild(img);
    } else {
        console.log('ID picture not found in localStorage');
    }
});
