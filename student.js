//result Local Storage
/* window.addEventListener('load', () => {

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
    const major = localStorage.getItem('MAJOR');
    const nature_of_degree = localStorage.getItem('NATURE_OF_DEGREE');
    //Signature
    const E_Signature = localStorage.getItem('E_Signature');

    window.addEventListener('load', () => { */

        

    /* document.getElementById('result-id-picture').innerHTML = idpicture;
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
    document.getElementById('result-Major').innerHTML = major;
    document.getElementById('result-natureDegree').innerHTML = nature_of_degree;
    document.getElementById('result-ESignature').innerHTML = E_Signature; 

})*/

window.addEventListener('load', () => { */
// Via local Storage
        //ID Picture
        const idpicture = localStorage.getItem('result-id-picture');
        //Fullname
        const firstname = localStorage.getItem('result-FirstName');
        const middlename = localStorage.getItem('result-MiddleName');
        const lastname = localStorage.getItem('result-LastName');
        //Gender
        const gender = localStorage.getItem('result-Gender');
         //Birth Details
        const birthdate = localStorage.getItem('result-Birthdate');
        const birthplacemunicipality = localStorage.getItem('result-BCity');
        const birthplaceprovince = localStorage.getItem('result-BProvince');
        const birthplacecountry = localStorage.getItem('result-BCountry');
        //Age
        const age = localStorage.getItem('result-Age');
        //Civil Status
        const civilstatus = localStorage.getItem('result-Civil');
        //Citizenship
        const citizenship = localStorage.getItem('result-Citizenship');
        //Nationality
        const nationality = localStorage.getItem('result-Nationality');
        //Home Address
        const housestreet = localStorage.getItem('result-Street');
        const barangay_subdivision = localStorage.getItem('result-Barangay');
        const municipality_city = localStorage.getItem('result-Municipality');
        const province = localStorage.getItem('result-Province');
        const countrystate = localStorage.getItem('result-Country');
        const zipcode = localStorage.getItem('result-ZipCode');
        //Contact information
        const phone = localStorage.getItem('result-Telephone');
        const facebook = localStorage.getItem('result-Facebook');
        const email = localStorage.getItem('result-Email');
        //In Case of Emergency
        const contact_person_1 = localStorage.getItem('result-ContactOne');
        const contact_person_1_mobile = localStorage.getItem('NumberOne');
        const relationship_1 = localStorage.getItem('result-RelationshipOne');
        const contact_person_2 = localStorage.getItem('result-ContactTwo');
        const contact_person_2_mobile = localStorage.getItem('result-NumberTwo');
        const relationship_2 = localStorage.getItem('result-RelationshipTwo');
        //Educational background
        const academic_classification = localStorage.getItem('result-Academic_Classification');
        const high_school_name_address = localStorage.getItem('result-high_school_name_address');
        const als_pept_name_address = localStorage.getItem('result-ALS');
        const college_name_address = localStorage.getItem('result-college_name_address');
         //LRN
        const lrn = localStorage.getItem('result-LRN');
        //Course Applying For
        const degree_applied = localStorage.getItem('result-Degree');
        const major = localStorage.getItem('result-Major');
        const nature_of_degree = localStorage.getItem('result-natureDegree');
        //Signature
        const E_Signature = localStorage.getItem('result-ESignature');

    document.getElementById('result-id-picture').textContent = idpicture;
    document.getElementById('result-FirstName').textContent = firstname;
    document.getElementById('result-MiddleName').textContent = middlename;
    document.getElementById('result-LastName').textContent = lastname;
    document.getElementById('result-Gender').textContent = gender;
    document.getElementById('result-Birthdate').textContent = birthdate;
    document.getElementById('result-BCity').textContent = birthplacemunicipality;
    document.getElementById('result-BProvince').textContent = birthplaceprovince;
    document.getElementById('result-BCountry').textContent = birthplacecountry;
    document.getElementById('result-Age').textContent = age;
    document.getElementById('result-Civil').textContent = civilstatus;
    document.getElementById('result-Citizenship').textContent = citizenship;
    document.getElementById('result-Nationality').textContent = nationality;
    document.getElementById('result-Street').textContent = housestreet;
    document.getElementById('result-Barangay').textContent = barangay_subdivision;
    document.getElementById('result-Municipality').textContent = municipality_city;
    document.getElementById('result-Province').textContent = province;
    document.getElementById('result-Country').textContent = countrystate;
    document.getElementById('result-ZipCode').textContent = zipcode;
    document.getElementById('result-Telephone').textContent = phone;
    document.getElementById('result-Facebook').textContent = facebook;
    document.getElementById('result-Email').textContent = email;
    document.getElementById('result-ContactOne').textContent = contact_person_1;
    document.getElementById('result-NumberOne').textContent = contact_person_1_mobile;
    document.getElementById('result-RelationshipOne').textContent = relationship_1;
    document.getElementById('result-ContactTwo').textContent = contact_person_2;
    document.getElementById('result-NumberTwo').textContent = contact_person_2_mobile;
    document.getElementById('result-RelationshipTwo').textContent = relationship_2;
    document.getElementById('result-Academic_Classification').textContent = academic_classification;
    document.getElementById('result-high_school_name_address').textContent = high_school_name_address;
    document.getElementById('result-ALS').textContent = als_pept_name_address;
    document.getElementById('result-college_name_address').textContent = college_name_address;
    document.getElementById('result-LRN').textContent = lrn;
    document.getElementById('result-Degree').textContent = degree_applied;
    document.getElementById('result-Major').textContent = major;
    document.getElementById('result-natureDegree').textContent = nature_of_degree;
    document.getElementById('result-ESignature').textContent = E_Signature;