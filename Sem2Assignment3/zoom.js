 /* Photo zoom
 *    Variables and functions
 *    Author: Ankit Mehra
 *    Date:   23-Feb-2021

 *    Filename: zoomStyles.js */


 "use strict"; // interpret document contents in JavaScript strict mode

 /* global variables */
 var photoOrderArray = window.opener.photoOrder;
 var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
 
 /* populate img element and create event listener */
 function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListeners();
    //window.opener.addFavorites();
 }
 // close Window
 function closeWin(){
    window.close();
 }
 function createEventListeners(){
    var closeWindow = document.querySelector("footer div p");
    closeWindow.addEventListener("click",closeWin,false);
 }
 
 /* add img src value and create event listener when page finishes loading */
 window.onload = pageSetup;