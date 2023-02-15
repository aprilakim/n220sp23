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

/*--if onmouseout turn blue!!!!!!!!!!!!!!!!!!!!!!---------------*/


/*-----------------------------------------------------------------------------------------*/
/*--Prof Instructions: --Write the markup and JavaScript to place a square div on 
the page (100px x 100px), with a blue background. Using onmouseover and onmouseout 
(instead of "onclick"), change the div's color to black when the mouse is over the 
div, and back to blue when the mouse leaves.-------------*/