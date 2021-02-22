/*
    Body Mass Index(BMI) Calculator
    Author -- Ankit Mehra
    Date 1 Feb 2021

    File name: bmrImperial.js
    js File to calculate to BMR in imperial system. 

*/


//global variables
var bmrImperial=0;
const menImperial = 66;
const women = 655;

// Calculate BMR for Imperial system

//MAN -BMR-Imperial = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
//WOMEN-BMR-Imperial = 655 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )


function calculateBmrImperial()
{
    var weight =document.getElementById("pound");
    var heightFeet =document.getElementById("heightFeet");
    var heightInches = document.getElementById("heightInches");
    var totalHeightInches = (heightFeet.value * 12) + parseInt(heightInches.value);
    var age = document.getElementById("ageImperial");
    if (document.getElementById("genderImperial").value==="Male"){
        bmrImperial = menImperial +(6.2*weight.value)+(12.7*totalHeightInches)-(6.76*age.value);
        document.getElementById("estImperial").innerHTML=" "+ bmrImperial.toFixed(2)+" Calories/day";
    }
    else {
        bmrImperial = women +(4.35*weight.value)+(4.7*totalHeightInches)-(4.7*age.value);
        document.getElementById("estImperial").innerHTML=" "+   bmrImperial.toFixed(2)+" Calories/day";
    }    
}

// Calculate Total Energy Expenditure(TEE)

//  Sedentary or light activity =BMR x 1.53
//  Active or moderately activy =BMR x 1.76
//  Vigorously active           =BMR x 2.25


function calculateTeeImperial()
{
    if(document.getElementById("SedentaryImperial").checked)
    {
        var tee = bmrImperial *1.53;
        document.getElementById("estImperialTEE").innerHTML=" "+  tee.toFixed(2)+" Calories/day";
    }
    else if(document.getElementById("activeImperial").checked)
    {
        var tee = bmrImperial *1.76;
        document.getElementById("estImperialTEE").innerHTML= " "+ tee.toFixed(2)+" Calories/day";
    }
    else if(document.getElementById("veryactiveImperial").checked)
    {
        var tee = bmrImperial *2.25;
        document.getElementById("estImperialTEE").innerHTML=" "+  tee.toFixed(2)+" Calories/day";
    }
}
//reset form 
function resetForm()
{
    //document.getElementById("weightmetric").value=1;
    //document.getElementById("heightmetric").value=2;
    //document.getElementById("agemetric").value=1;
    createEventListener();
}

//create event listener on the click of button
function createEventListener()
{
    //document.getElementById("weightmetric").addEventListener("change",calculateBMR,false);
    //document.getElementById("heightmetric").addEventListener("change",calculateBMR,false);
    //document.getElementById("agemetric").addEventListener("change",calculateBMR,false);
    document.getElementById("calbmrImperial").addEventListener("click",calculateBmrImperial,false);
    document.getElementById("calTeeImperial").addEventListener("click",calculateTeeImperial,false);
}

//Reset form when page is reloaded
window.addEventListener("load", resetForm, false);  