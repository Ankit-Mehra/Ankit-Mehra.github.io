/*    Photo gallery
 *    Author: Ankit Mehra
 *    Date:   23-Feb-2021

 *    Filename: gallery.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var favOrder = [1,2,3,4,5];
var figureCount = 3;
var autoAdvance = setInterval(rightAdvance, 7000);
var removeCounter =0;
var favCounter = 1 -removeCounter;
var favIdAdd;
var favIdRemove;
//var zoomWindow;
/* add src values to img elements based on order specified in
2 photoOrder array */
function populateFigures(){
   var fileName;
   var currentFig;
   if(figureCount === 3){
      for(var i = 1;i<4;i++){
         fileName = "images/IMG_0"+photoOrder[i]+"sm.jpg";
         currentFig = document.getElementsByTagName("img")[i-1];
         currentFig.src =fileName;
      }
   }
   else{
      for(var i = 0;  i  <5 ;i++){
         fileName = "images/IMG_0"+photoOrder[i]+"sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src =fileName;
      }
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}
function rightArrow(){
   clearInterval(autoAdvance);
   rightAdvance();
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
   
}

/* switch to 5-image layout */
function previewFive() {
   var articleE1 = document.getElementsByTagName("article")[0];
   //create figure and element for fifth image
   var lastfigure = document.createElement("figure");
   lastfigure.id = "fig5";
   lastfigure.style.zIndex = "3";
   lastfigure.style.position = "absolute";
   lastfigure.style.right = "14px";
   lastfigure.style.top = "75px";

   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height ="220";
   lastfigure.appendChild(lastImage);
   //articleE1.appendChild(lastfigure)
   articleE1.insertBefore(lastfigure,document.getElementById("rightarrow"));
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastfigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "14px";
   //articleE1.appendChild(firstFigure);
   articleE1.insertBefore(firstFigure,document.getElementById("fig2"));
   // document.getElementsByTagName("img")[0].src = "images/IMG_0"+ photoOrder[0] + "sm.jpg";
   // document.getElementsByTagName("img")[4].src = "images/IMG_0"+ photoOrder[4] + "sm.jpg";
   figureCount = 5;
   populateFigures();
   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if(numberButton.addEventListener){
      numberButton.removeEventListener("click",previewFive,false);
      numberButton.addEventListener("click",previewThree,false);
   }
   else if (numberButton.attachEvent){
      numberButton.detachEvent("click",previewFive);
      numberButton.attachEvent("click",previewThree);
   }
}
// switch to 3-image layout 
function previewThree(){
   var articleE1 = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   articleE1.removeChild(document.getElementById("fig1"));
   articleE1.removeChild(document.getElementById("fig5"));
   figureCount = 3;
   numberButton.innerHTML = "Show more images"
   if(numberButton.addEventListener){
      numberButton.removeEventListener("click",previewThree,false);
      numberButton.addEventListener("click",previewFive,false);
   }
   else if (numberButton.attachEvent){
      numberButton.detachEvent("click",previewThree);
      numberButton.attachEvent("click",previewFive);
   }

}

/* open center figure in separate window */
function zoomFig() 
{ 
   var width = 875;
   var height = 650;
   var winleft = ((screen.width - width)/2);
   var winheight = ((screen.height- height)/2);
   var winOption = "width=860,height=700,";
   winOption += ",left="+winleft;
   winOption += ",top="+winheight;
   var zoomWindow = window.open("zoom3.html", "zoomwin",winOption);
   zoomWindow.focus();
   //function to add images to favorites
   function addFavorites(){
      var newArticle = document.getElementById("newArticle");
      var newFigure = document.createElement("figure");
      var zoomImage = document.createElement("img");
      zoomImage.width = "150";
      zoomImage.height= "100";
      zoomImage.src = zoomWindow.document.getElementsByTagName("img")[0].src;
      if(favCounter <=5){
         newArticle.appendChild(newFigure);
         newFigure.id = "fav"+favCounter;
         newFigure.appendChild(zoomImage);
         favCounter+=1;
      }
      else{
         zoomWindow.alert("Only five images are allowed in favorities.Please remove one image from favorites to add more images."); 
      }

   }
   zoomWindow.addEventListener("load",function(){
      var favorite =zoomWindow.document.querySelector("#favorite");
      favorite.addEventListener("click",function(){
         addFavorites();
         removeFavorites();},false);
   },false);
}

// remove images from favorites
function removeFavorites()
{
   var removeButton = document.createElement("p");
   removeButton.id= "removebutton";
   removeButton.innerHTML = "Remove Image";
   removeButton.style.color ="rgb(236, 124, 19)"
   var newImage1 = document.getElementById("fav1");
   newImage1.addEventListener("click",function(){newImage1.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
         var newArticle = document.getElementById("newArticle");
         newArticle.removeChild(newImage1);
         favCounter -=1;
      });
   },false);
   var newImage2 = document.getElementById("fav2");
   newImage2.addEventListener("click",function(){newImage2.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
         var newArticle = document.getElementById("newArticle");
         newArticle.removeChild(newImage2);
         favCounter -=1;
      });
   },false);
   var newImage3 = document.getElementById("fav3");
   newImage3.addEventListener("click",function(){newImage3.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
         var newArticle = document.getElementById("newArticle");
         newArticle.removeChild(newImage3);
         favCounter -=1;
      });
   },false);
   var newImage4 = document.getElementById("fav4");
   newImage4.addEventListener("click",function(){newImage4.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
         var newArticle = document.getElementById("newArticle");
         newArticle.removeChild(newImage4);
         favCounter -=1;
      });
   },false);
   var newImage5 = document.getElementById("fav5"); 
   newImage5.addEventListener("click",function(){newImage5.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
         var newArticle = document.getElementById("newArticle");
         newArticle.removeChild(newImage5);
         favCounter -=1;
      });
   },false);
   // removeCounter +=1;
   // favCounter -=1;
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners()  
{
    var leftarrow = document.getElementById("leftarrow");
    if(leftarrow.addEventListener)
    {
      leftarrow.addEventListener("click",leftArrow,false);
    }
    else if(leftarrow.attachEvent){
      leftarrow.attachEvent("onclick",leftArrow);
    }

    var rightarrow = document.getElementById("rightarrow");
    if(rightarrow.addEventListener){
      rightarrow.addEventListener("click",rightArrow,false);
    }
    else if(rightarrow.attachEvent){
      rightarrow.attachEvent("onclick",rightArrow);
    }

    var mainFig = document.getElementsByTagName("img")[1];
    if(mainFig.addEventListener){
       mainFig.addEventListener("click",zoomFig,false);
    }
    else if (mainFig.attachEvent){
       mainFig.attachEvent("onclick",zoomFig);
    }

    var showAllButton = document.querySelector("#fiveButton p");
    if (showAllButton.addEventListener){
       showAllButton.addEventListener("click",previewFive,false);
      }
    else if (showAllButton.attachEvent){
       showAllButton.attachEvent("onclick",previewFive);
    }
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
  
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}


