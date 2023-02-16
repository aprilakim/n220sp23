/*
April Kim
13 February 2023
N220 sp23
Class #23523
*/


/*Algorithm:---------------------------------------------------------------------------------*/
/*--Make an obect that stores Varaibale for height: 100px, Variable for width: 100px, and color:green(background)-
    located in peakPixels.css------*/
/*--Link the <div> element with id in HTML document-------*/


let shape = document.getElementById("shapeB");
let h = 100;
let w = 100;

/*--If mouse is clicked, increase div by 1.1* the original size-------*/
/*--Notes: the square grows width and height ONE time only. How can I 
(store the variables so that the square can keep increasing in size?)---*/
function growSquare() {
    shape.style.width = `${h * 1.1}px`;
    shape.style.height = w * 1.1 + "px";
}

/*--------------------------------------------------------------------------------------------*/
/*--Prof Instructions:Write the markup and JS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and with of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size-------*/
