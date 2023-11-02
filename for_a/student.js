//result Local Storage
window.addEventListener('load', () => {

    // Via local Storage
    //ID Picture
    const idpicture = localStorage.getItem('IDPICTURE');
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

    const E_Signature = localStorage.getItem('E_Signature');

    document.getElementById('result-id-picture').innerHTML = idpicture;
    document.getElementById('result-FirstName').innerHTML = firstname;
    document.getElementById('result-MiddleName').innerHTML = middlename;
    document.getElementById('result-LastName').innerHTML = lastname;
    document.getElementById('result-Gender').innerHTML = gender;
    document.getElementById('result-Girthdate').innerHTML = birthdate;
    document.getElementById('result-City').innerHTML = birthplacemunicipality;
    document.getElementById('result-Province').innerHTML = birthplaceprovince;
    document.getElementById('result-Country').innerHTML = birthplacecountry;
    document.getElementById('result-Age').innerHTML = age;
    document.getElementById('result-Civil').innerHTML = civilstatus;
    document.getElementById('result-Citizenship').innerHTML = citizenship;
    document.getElementById('result-Nationality').innerHTML = nationality;
    document.getElementById('result-Street').innerHTML = housestreet;
    document.getElementById('result-Barangay').innerHTML = barangay_subdivision;
    document.getElementById('result-Municipality').innerHTML = municipality_city;
    document.getElementById('result-Province').innerHTML = province;
    document.getElementById('result-Country').innerHTML = countrystate;
    document.getElementById('result-ZipCode').innerHTML = zipcode;
    document.getElementById('result-Telephone').innerHTML = phone;
    document.getElementById('result-Facebook').innerHTML = facebook;
    document.getElementById('result-Email').innerHTML = email;
    document.getElementById('result-ContactOne').innerHTML = contact_person_1;
    document.getElementById('result-NumberOne').innerHTML = contact_person_1_mobile;
    document.getElementById('result-RelationshipOne').innerHTML = relationship_1;
    document.getElementById('result-ContactTwo').innerHTML = contact_person_2;
    document.getElementById('result-NumberTwo').innerHTML = contact_person_2_mobile;
    document.getElementById('result-RelationshipTwo').innerHTML = relationship_2;
    document.getElementById('result-Academic_Classification').innerHTML = academic_classification;
    document.getElementById('result-high_school_name_address').innerHTML = high_school_name_address;
    document.getElementById('result-ALS').innerHTML = als_pept_name_address;
    document.getElementById('result-college_name_address').innerHTML = college_name_address;
    document.getElementById('result-LRN').innerHTML = lrn;
    document.getElementById('result-Degree').innerHTML = degree_applied;
    document.getElementById('result-natureDegree').innerHTML = nature_of_degree;
    document.getElementById('result-ESignature').innerHTML = E_Signature;

})
