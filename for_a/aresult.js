//result Local Storage
window.addEventListener('load', () => {

    // Via local Storage
    //Fullname
    const firstname = localStorage.getItem('FIRSTNAME');
    const middlename = localStorage.getItem('MIDDLENAME');
    const lastname = localStorage.getItem('LASTNAME');
    //Gender
    const gender = localStorage.getItem('GENDER');
     //Birth Details
    const birthdate = localStorage.getItem('BIRTHDATE');
    const birthplacemunicipality = localStorage.getItem('BIRTHPLACE_MUNICIPALITY');
    const birthplaceprovince = localStorage.getItem('BIRHTPLACE_PROVINCE');
    const birthplacecountry = localStorage.getItem('BIRHTPLACE_COUNTRY');
    //Age
    const age = localStorage.getItem('AGE');
    //Civil Status
    const civilstatus = localStorage.getItem('CIVIL_STATUS');
    //Citizenship
    const citizenship = localStorage.getItem('CITIZENSHIP');
    //Nationality
    const nationality = localStorage.getItem('NATIONALITY');
    //Home Address
    const housestreet = localStorage.getItem('HOUSE_STREET');
    const barangay_subdivision = localStorage.getItem('BARANGAY_SUBDIVISION');
    const municipality_city = localStorage.getItem('MUNICIPALITY_CITY');
    const province = localStorage.getItem('PROVINCE');
    const countrystate = localStorage.getItem('COUNTRY_STATE');
    const zipcode = localStorage.getItem('ZIPCODE');
    //Contact information
    const phone = localStorage.getItem('PHONE');
    const facebook = localStorage.getItem('FACEBOOK');
    const email = localStorage.getItem('EMAIL');
    //In Case of Emergency
    const contact_person_1 = localStorage.getItem('CONTACT_PERSON_1');
    const contact_person_1_mobile = localStorage.getItem('CONTACT_PERSON_1_MOBILE');
    const relationship_1 = localStorage.getItem('RELATIONSHIP_1');
    const contact_person_2 = localStorage.getItem('CONTACT_PERSON_2');
    const contact_person_2_mobile = localStorage.getItem('CONTACT_PERSON_2_MOBILE');
    const relationship_2 = localStorage.getItem('RELATIONSHIP_2');
    //Educational background
    const academic_classification = localStorage.getItem('ACADEMIC_CLASSIFICATION');
    const high_school_name_address = localStorage.getItem('HIGH_SCHOOL_NAME_ADDRESS');
    const als_pept_name_address = localStorage.getItem('ALS_PEPT_NAME_ADDRESS');
    const college_name_address = localStorage.getItem('COLLEGE_NAME_ADDRESS');
     //LRN
    const lrn = localStorage.getItem('LRN');
    //Course Applying For
    const degree_applied = localStorage.getItem('DEGREE_APPLIED');
    const nature_of_degree = localStorage.getItem('NATURE_OF_DEGREE');

    
    document.getElementById('result-firstname').innerHTML = firstname;
    document.getElementById('result-middlename').innerHTML = middlename;
    document.getElementById('result-lastname').innerHTML = lastname;
    document.getElementById('result-gender').innerHTML = gender;
    document.getElementById('result-birthdate').innerHTML = birthdate;
    document.getElementById('result-birthplacemunicipality').innerHTML = birthplacemunicipality;
    document.getElementById('result-birhtplaceprovince').innerHTML = birthplaceprovince;
    document.getElementById('result-birthplacecountry').innerHTML = birthplacecountry;
    document.getElementById('result-age').innerHTML = age;
    document.getElementById('result-civilstatus').innerHTML = civilstatus;
    document.getElementById('result-citizenship').innerHTML = citizenship;
    document.getElementById('result-nationality').innerHTML = nationality;
    document.getElementById('result-housestreet').innerHTML = housestreet;
    document.getElementById('result-barangay_subdivision').innerHTML = barangay_subdivision;
    document.getElementById('result-municipality_city').innerHTML = municipality_city;
    document.getElementById('result-province').innerHTML = province;
    document.getElementById('result-countrystate').innerHTML = countrystate;
    document.getElementById('result-zipcode').innerHTML = zipcode;
    document.getElementById('result-phone').innerHTML = phone;
    document.getElementById('result-facebook').innerHTML = facebook;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-contact_person_1').innerHTML = contact_person_1;
    document.getElementById('result-contact_person_1_mobile').innerHTML = contact_person_1_mobile;
    document.getElementById('result-relationship_1').innerHTML = relationship_1;
    document.getElementById('result-contact_person_2').innerHTML = contact_person_2;
    document.getElementById('result-contact_person_2_mobile').innerHTML = contact_person_2_mobile;
    document.getElementById('result-relationship_2').innerHTML = relationship_2;
    document.getElementById('result-academic_classification').innerHTML = academic_classification;
    document.getElementById('result-high_school_name_address').innerHTML = high_school_name_address;
    document.getElementById('result-als_pept_name_address').innerHTML = als_pept_name_address;
    document.getElementById('result-college_name_address').innerHTML = college_name_address;
    document.getElementById('result-lrn').innerHTML = lrn;
    document.getElementById('result-degree_applied').innerHTML = degree_applied;
    document.getElementById('result-nature_of_degree').innerHTML = nature_of_degree;

})
