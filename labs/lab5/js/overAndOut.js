/*
April Kim
13 February 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/
/*--create a blue square div 100px*100px: See CSS file---------------*/

let square = document.getElementById("shapeA");

/*--styling in css file, but this works too------
square.style.backgroundColor = "#0000FF";
square.style.width = "100px";
square.style.height = "100px";
--------------------------------------------------*/


/*--if onmouseover turn black---------------*/
function changeColor() {
    square.style.backgroundColor = "#000000";    
}

/*--if onmouseout turn blue---------------*/
function changeColorAgain() {
    square.style.backgroundColor = "#0000FF";
}


