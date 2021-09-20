/*
Author :Ankit Mehra
File: Canvas.js
*/

//global variables
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-150;
canvas.height = window.innerHeight-200;
var c = canvas.getContext('2d');
var bugSmashed = 0;
var bugImage = new Image();
bugImage.src = "bug.png";
var bugCounter = 0;
var score = document.getElementById("score");
var resetSpeed = document.getElementById("resetSpeed");
var resetScore = document.getElementById("resetScore");
var clearScreen = document.getElementById("clearScreen");
var hoppingSpeed =  1500; 
var disappearingTime = 1400;

//rendering background image
function renderImage()
{
    var backImage = new Image();
    backImage.src = "tropics.jpg";
    backImage.onload = function(){
        c.drawImage(backImage,0,0,canvas.width,canvas.height)}
}
// renderImage();

var mouse = {x:undefined,
            y:undefined}

//added eventlistener on the mouse
window.addEventListener('mousemove',function (event){
    console.log("x:"+event.x)
    console.log("y:"+event.y)
    mouse.x = event.x;
    mouse.y = event.y;
})

//Making a bug
class Bug {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //rendering bug
    renderBug(){
        c.drawImage(bugImage,this.x,this.y,65,65)
    }
    //Smashing the bug
    smashBug(){
        var smashed = false
        // console.log(Math.abs(this.x-mouse.x) <= 120 &&
        //             Math.abs(this.y-mouse.y)<=120)
        if(Math.abs(this.x-mouse.x) <= 120 &&
            Math.abs(this.y-mouse.y)<=170)
        {   
            bugImage.src = "bug_smashed.png";
            c.drawImage(bugImage,this.x,this.y,100,100);
            smashed = true;
            c.clearRect(aBug.x,aBug.y,60,60)
            
        }
        if (smashed)
        {
            // setTimeout(function(){{
            //     bugImage.src = "bug.png";
            // }},5000)
            bugSmashed+=1;
            score.innerHTML = bugSmashed;
            // increasing the hopping speed as score increases
            if(bugSmashed >= 2 && bugSmashed <= 4 && hoppingSpeed > 1300)
            {
                hoppingSpeed -= 200;
                disappearingTime -= 200; 
            }
            else if(bugSmashed >= 4 && bugSmashed <= 8 && hoppingSpeed > 1100)
            {
                hoppingSpeed -= 200;
                disappearingTime -= 200;
            }
            else if(bugSmashed >= 8 && hoppingSpeed > 900)
            {
                hoppingSpeed -= 300;
                disappearingTime -= 300;
            }  
        }    
    }
}

// setting interval for hopping
var interval1 = setInterval(function()
    {
        var x = 32+Math.random()*(canvas.width-65);
        var y = 32+Math.random()*(canvas.height-65);
        bugImage.src = "bug.png";
        globalThis.aBug = new Bug(x,y);
        aBug.renderBug();
        bugCounter += 1;
    }, hoppingSpeed);
//setting interval for disappearing the bug
var interval2 = setInterval(function(){
    c.clearRect(aBug.x,aBug.y,65,65)
},disappearingTime)

//smashing bug on clicks
window.addEventListener('click',function (){
    aBug.smashBug();
})
window.addEventListener('touchstart',function (){
    aBug.smashBug();
})

//event listener for reset speed button 
resetSpeed.addEventListener('click',function(){
    bugSmashed = 2;
    hoppingSpeed = 4000;
    disappearingTime = 3900;
})
resetSpeed.addEventListener('touchstart',function(){
    bugSmashed = 2;
    hoppingSpeed = 4000;
    disappearingTime = 3900;
})
//event listener for reset  score button 
resetScore.addEventListener('click',function(){
    bugSmashed = 0;
    score.innerHTML = bugSmashed;
})
resetScore.addEventListener('touchstart',function(){
    bugSmashed = 0;
    score.innerHTML = bugSmashed;
})
//event listener for clear screen button
clearScreen.addEventListener('click',function(){
    location.reload();
})
clearScreen.addEventListener('touchstart',function(){
    location.reload();
})



// function stopInterval(){
//     clearInterval(interval);
// }



// aBug.x = 32+Math.random()*(canvas.width-64);
            // aBug.y = 32+Math.random()*(canvas.height-64);
            // bugCounter -= 1;

// var img = c.createImageData(65, 65);
        // for (var i = img.data.length; --i >= 0; )
        //     img.data[i] = 0;
        // c.putImageData(img,x,y);

// var bugArray = [];
// for (var i = 0; i<1; i++)
// {
//     var x = 32+Math.random()*(canvas.width-64);
//     var y = 32+Math.random()*(canvas.height-64);
//     bugArray.push (new Bug(x,y));
// }

// var x = 32+Math.random()*(canvas.width-64);
// var y = 32+Math.random()*(canvas.height-64);
// var aBug = new Bug(x,y);
// aBug.renderBug();
//var aBug = new Bug();



// window.addEventListener('click',function (event){
//     aBug.deleteBug(event.x,event.y);
//     // console.log(event.x)
//     // mouse.x = event.x;
//     // mouse.y = event.y;
// })
//stopInterval();

// function animate()
// {
//     requestAnimationFrame(animate);
//     var x = 32+Math.random()*(canvas.width-64);
//     var y = 32+Math.random()*(canvas.height-64);
//     var aBug = new Bug(x,y);
//     for (let i = 0; i < array.length; i++) {
//         if(bugCounter === 0)
//         {
//             bugArray[i].renderBug();
//             bugCounter += 1;
//         }
//     }
//     window.addEventListener('click',function (event){
//         aBug.deleteBug(event.x,event.y);
//     })
// }
// animate();
// var img = ctx.createImageData(w, h);
// for (var i = img.data.length; --i >= 0; )
//   img.data[i] = 0;
// ctx.putImageData(img, 100, 100);

