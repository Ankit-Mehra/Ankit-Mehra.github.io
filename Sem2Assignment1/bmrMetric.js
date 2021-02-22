/*
    Body Mass Index(BMI) Calculator
    Author -- Ankit Mehra
    Date 1 Feb 2021

    File name: bmrMetric.js
    js File to calculate to BMR in metric system. 

*/


//global variables
var bmrMetric =0;
const menMetric = 66.5;
const women = 655;

// Calculate BMR for metric system

//MAN -BMR-Metric   = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
//WOMEN-BMR-Metric  = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )


function calculateBmrMetric()
{
    var weight =document.getElementById("weightmetric");
    var height =document.getElementById("heightmetric");
    var age = document.getElementById("agemetric");
    if (document.getElementById("gender").value==="Male"){
        bmrMetric = menMetric +(13.75*weight.value)+(5.003*height.value)-(6.755*age.value);
        document.getElementById("estMetric").innerHTML=" "+  bmrMetric.toFixed(2)+" Calories/day";
    }
    else {
        bmrMetric = women +(9.563*weight.value)+(1.850*height.value)-(4.676*age.value);
        document.getElementById("estMetric").innerHTML=" "+   bmrMetric.toFixed(2)+" Calories/day";
    }    
}

// Calculate Total Energy Expenditure(TEE)

//  Sedentary or light activity =BMR x 1.53
//  Active or moderately activy =BMR x 1.76
//  Vigorously active           =BMR x 2.25

function calculateTeeMetric()
{
    if(document.getElementById("Sedentary").checked)
    {
        var tee = bmrMetric *1.53;
        document.getElementById("estMetricTEE").innerHTML=" "+  tee.toFixed(2)+" Calories/day";
    }
    else if(document.getElementById("active").checked)
    {
        var tee = bmrMetric *1.76;
        document.getElementById("estMetricTEE").innerHTML= " "+ tee.toFixed(2)+" Calories/day";
    }
    else if(document.getElementById("veryactive").checked)
    {
        var tee = bmrMetric *2.25;
        document.getElementById("estMetricTEE").innerHTML=" "+  tee.toFixed(2)+" Calories/day";
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
    document.getElementById("calbmrMetric").addEventListener("click",calculateBmrMetric,false);
    document.getElementById("calteemetric").addEventListener("click",calculateTeeMetric,false);
}

//Reset form when page is reloaded
window.addEventListener("load", resetForm, false);
