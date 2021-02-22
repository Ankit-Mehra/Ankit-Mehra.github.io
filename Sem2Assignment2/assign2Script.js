/*
    Table generator 
    Author -- Ankit Mehra
    Date 1 Feb 2021

    File name: assign2Script.js
*/

// global variable 
var rows = document.getElementById("rows");
var columns = document.getElementById("columns");
// var theDiv = document.getElementById("container");
var mainElement = document.getElementById("mainElement");

//  append  table element to body 
function setTable() {
    var table = document.createElement("TABLE");
    table.setAttribute("id" ,"table");
    mainElement.appendChild(table);
}

// inserting rows and column in the table
function drawTable(){
    if(columns.value <= 26)
    {
        setTable();
        for(var i =1 ; i<=rows.value; i++)
        {
            var row = document.createElement("TR");
            var idValue = "row-"+i;
            row.setAttribute("id",idValue);
            document.getElementById("table").appendChild(row);
            for(var j =1 ; j<=columns.value; j++)
            {
                var column = document.createElement("TD");
                rowColoumn = document.createTextNode(i+","+j);
                column.appendChild(rowColoumn);
                column.setAttribute("id",i+","+j);
                document.getElementById(idValue).appendChild(column);
            }
        }
    }
    else{
        alert("That would be too large for the screen. Try columns less than 27")
    }
}


// giving table some styles
function tableStyle(){
    var table = document.getElementById("table");
    table.style.cssText= "border: 1px solid black; margin-left: auto;margin-right: auto";
    for(var i =1 ; i<=rows.value; i++){
        for(var j =1 ; j<=columns.value; j++){
            var column = document.getElementById(i+","+j);
            if(i%2==0 )
            {
                column.style.cssText = "border: 1px solid black; margin-left: auto;margin-right: auto;";
                                        
            }
            else{
                column.style.cssText = "border: 1px solid black; margin-left: auto;margin-right: auto;"
                                        +" background-color: rgb(116, 160, 116);";
            }
            
        }        
    }
}

// reset the values and rows and column and removing the table from div
function reset(){
    document.getElementById("rows").value = 0;
    document.getElementById("columns").value =0;
    resetTable = document.getElementById("table")
    // theDiv.removeChild(resetTable);
    mainElement.removeChild(resetTable);
}

// create events listeners for drawTable and reset button
function createEventListener(){
    drawTableButton = document.getElementById("drawTable");
    resetTableButton = document.getElementById("reset");
    drawTableButton.addEventListener("click",drawTable,false);
    drawTableButton.addEventListener("click",tableStyle,false);
    resetTableButton.addEventListener("click",reset,false);
}

// add events to window
window.addEventListener("load",createEventListener,false);
