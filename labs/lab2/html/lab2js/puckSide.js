/*April Kim
23 January 2023
Class 23523
*/

/* Algorithm: Check the location of the mouse. 
If the position is less than 200, fill the circle blue.
Or else, make red. 
*/

radius = 40;
var half;
                                     

function setup() {
    createCanvas(400, 300);                 //keep Canvas set at 400*300   
    half = width/2;                         //store half the width of the canvas as variable
}

function draw() {
    background(0);                          //background here allows only the most recent frame to appear
    ellipse(mouseX, mouseY, radius, radius);//Draw a circle where the mouse is located
    
    if ( mouseX < half) {                   //if ball is on left half of canvas, circle is blue
        fill(102, 179, 255);
    } else{                                 //if ball is on right half of screen, circle is red
        fill(255, 77, 77);
    }
}





