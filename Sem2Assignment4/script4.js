/*Assignment-4 javaScript file
* Author: Ankit Mehra
*/

//var formValidity = false;
var formFieldValidity;
var postalValidity;
var provinceValidity;
var ageValidity;
var emailValidity;
var passwordValidity;
var passwordMatch;

// check if fields of form are empty 
function validateFormFields(){
    var inputFields = document.querySelectorAll("#fields input");
    var inputFieldsLabel = document.querySelectorAll("#fields label");
    var emptyFields = 0;
    for(var i= 0;i<inputFields.length;i++){
        //check if any of the fields are empty
        if (!(inputFields[i].value ===""))
        {
            inputFields[i].style.background = "white";
            document.getElementById("errorText").innerHTML = "";
            document.getElementById("errorText").style.display = "none";
        }
        else
        {
            inputFields[i].style.background = "rgb(231, 111, 81)";
            scroll(0,0);
            emptyFields += 1;
        }
    }
    if (emptyFields > 0){
        document.getElementById("errorText").innerHTML = "* Please fill up the empty fields and then register again";
        document.getElementById("errorText").style.display = "block";
        document.getElementById("errorText").style.color = "rgb(204, 61, 24)";
        formFieldValidity = false;
    }
    else{
        formFieldValidity = true;
    }
}

// check for correct format of postal code field i.e X0X X0X
function validatePostalCode(){
    var postalCode = document.getElementById("Postalcode");
    var postalCodeLabel = document.getElementById("PostalcodeLabel");
    let postalCodeRegExp = /[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/;
    if(!(postalCode.value === ""))
    {
        if (postalCodeRegExp.test(postalCode.value))
        {
            document.getElementById("postalErrorText").innerHTML = "";
            document.getElementById("postalErrorText").style.display = "none";
            postalCode.style.background = "rgb(149, 243, 120)";
            postalValidity = true;
        }
        else
        {
            document.getElementById("postalErrorText").innerHTML = " * Please enter the postal code in correct format, For Example:-M8RE9G";
            document.getElementById("postalErrorText").style.display = "block";
            // customMessage("Postalcode")
            //postalCode.style.background = "rgb(241, 91, 113)";
            postalCodeLabel.innerHTML = "Postal Code *"
            // document.getElementById("postalErrorText").style.background = "rgb(241, 91, 113)";
            formValidity = false;
        }
    }
}

// check for correct province ['QC','ON','MN','SK','AB','BC']
function validateProvince(){
    var province = document.getElementById("Province");
    var provinceLabel = document.getElementById("ProvinceLabel");
    var validateProvince = ['QC','ON','MB','SK','AB','BC'];
    for(var i = 0; i < validateProvince.length;i++)
    {
        if(!(province.value === ""))
        {
            if(province.value.toUpperCase() === validateProvince[i]){
                document.getElementById("provinceErrorText").innerHTML = "";
                document.getElementById("provinceErrorText").style.display = "none";
                province.style.background = "rgb(149, 243, 120)";
                provinceValidity = true;
                break;
            }
            else
            {
                document.getElementById("provinceErrorText").innerHTML = " * Please enter one of the following province [QC, ON, MB, SK, AB, BC]";
                //province.style.background = "rgb(241,91,113)";
                provinceLabel.innerHTML = "Province *"
                document.getElementById("provinceErrorText").style.display = "block";
                provinceValidity = false;
                // document.getElementById("provinceErrorText").style.background = "rgb(251, 216, 221)";
            }
        }
    }
}

// validate the age should be above 18
function validateAge()
{
    var age = document.getElementById("age");
    if(!(age.value === ""))
    {
       if(age.value < 18){
            document.getElementById("ageErrorText").innerHTML ="*Age should be above 18 to get registered.";
            document.getElementById("ageErrorText").style.display = "block";
            //age.style.background = "rgb(241,91,113)";
            document.getElementById("ageLabel").innerHTML ="Age *";
            ageValidity = false;
        }
        
        else{
            document.getElementById("ageErrorText").innerHTML ="";
            age.style.background = "rgb(149, 243, 120)";
            ageValidity = true;

        }
    }
}

//validate that email addresses entered is having the criteria of 'xyz@xyz.xyz'
function validateEmail(){
    let emailRegPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailID = document.getElementById("email");
    if(!(emailID.value === ""))
    {
        if (emailRegPattern.test(emailID.value))
        {
            document.getElementById("emailErrorText").innerHTML = "";
            document.getElementById("emailErrorText").style.display = "none";
            emailID.style.background = "rgb(149, 243, 120)";
            emailValidity = true;
        }
        else{
            document.getElementById("emailErrorText").innerHTML = "* Please enter your email-ID in xyz@xyz.xyz format";
            document.getElementById("emailErrorText").style.display = "block";
            document.getElementById("emailLabel").innerHTML = "Email *"
            //emailID.style.background = "rgb(241,91,113)";
            emailValidity = false;
        }
    }
}

// Matches the password and confirm password 
function matchPassword()
{
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    if (!(password.value === "" || confirmPassword.value === ""))
    {
        if(confirmPassword.value === password.value)
        {
            document.getElementById("passwordMatchErrorText").innerHTML = "";
            document.getElementById("passwordMatchErrorText").style.display = "none";
            passwordMatch = true;
        }
        else{
            document.getElementById("passwordMatchErrorText").innerHTML = "*Your passwords do not match.Please try again";
            document.getElementById("passwordMatchErrorText").style.display = "block";
            document.getElementById("confirmPasswordLabel").innerHTML = "Confirm Password *";
            document.getElementById("passwordLabel").innerHTML = "Password *";
            //password.style.background = "rgb(241,91,113)";
            //confirmPassword.style.background = "rgb(241,91,113)";
            passwordMatch = false;

        }
    }
}

// checks if passwords have at least 6 characters and must contain at least one digit and one upper-case character.
function validatePassword(){
    var password = document.getElementById("password");
    let passwordRegPattern = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/; 
    if (!(password.value === ""))
    {
        if (passwordRegPattern.test(password.value)){
            document.getElementById("passwordErrorText").innerHTML ="";
            document.getElementById("passwordErrorText").style.display ="none";
            passwordValidity = true;
        }
        else{
            document.getElementById("passwordErrorText").innerHTML ="*Passwords must have at least 6 characters and<br>must contain";
            document.getElementById("passwordErrorText").innerHTML += "at least one digit and one upper-case character";
            document.getElementById("passwordErrorText").style.display ="block";
            document.getElementById("confirmPasswordLabel").innerHTML = "Confirm Password *";
            document.getElementById("passwordLabel").innerHTML = "Password *";
            //password.style.background = "rgb(241,91,113)";
            //confirmPassword.style.background = "rgb(241,91,113)";   
            passwordValidity = false;
        }
    }
}
// Validate the form based various parameter
function validateForm(evt){
    evt.preventDefault();
    validateFormFields();
    validatePostalCode();
    validateProvince();
    validateAge();
    validateEmail();
    matchPassword();
    validatePassword();
    // check for all conditions to be true
    if(formFieldValidity === true && postalValidity === true && provinceValidity ===  true && ageValidity ===  true && emailValidity ===  true 
        && passwordValidity ===  true && passwordMatch  ===  true )
    {
        document.getElementsByTagName("form")[0].submit();
        alert("Thanks for registering with our website, your customer record was created successfully.");
    } 
    else{ 
        evt.preventDefault();
    } 
}

// create eventlisteners
function createEventListener(){ 
    var registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click",validateForm,false);
}

window.addEventListener("load",createEventListener,false);

//Postal code regex pattern
///[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/
//Match a single character present in the list below [A-Za-z]
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// Match a single character present in the list below [0-9]
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
// Match a single character present in the list below [A-Za-z]
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// Match a single character present in the list below [0-9]
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
// Match a single character present in the list below [A-Za-z]
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
// a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
// Match a single character present in the list below [0-9]
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)


//email regex pattern 
///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// asserts position at start of a line
// Match a single character not present in the list below [^\s@]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// \s matches any whitespace character (equivalent to [\r\n\t\f\v ])
// @ matches the character @ literally (case sensitive)
// @ matches the character @ literally (case sensitive)
// Match a single character not present in the list below [^\s@]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// \s matches any whitespace character (equivalent to [\r\n\t\f\v ])
// @ matches the character @ literally (case sensitive)
// \. matches the character . literally (case sensitive)
// Match a single character not present in the list below [^\s@]
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
// \s matches any whitespace character (equivalent to [\r\n\t\f\v ])
// @ matches the character @ literally (case sensitive)
// $ asserts position at the end of a line


// password regex pattern 
// /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/; 
// ^ asserts position at start of a line
// Positive Lookahead (?=.[A-Z])
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// Match a single character present in the list below [A-Z]
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case sensitive)
// Positive Lookahead (?=.[0-9])
// Assert that the Regex below matches
// . matches any character (except for line terminators)
// *? matches the previous token between zero and unlimited times, as few times as possible, expanding as needed (lazy)
// Match a single character present in the list below [0-9]
// 0-9 matches a single character in the range between 0 (index 48) and 9 (index 57) (case sensitive)
// . matches any character (except for line terminators)
// {6,} matches the previous token between 6 and unlimited times, as many times as possible, giving back as needed (greedy)
// $ asserts position at the end of a line