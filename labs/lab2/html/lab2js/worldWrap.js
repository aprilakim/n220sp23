/*April Kim
23 January 2023
Class 23523
*/


var radius = 80;
var x = -radius;
var speed = 2;

function setup() {
    createCanvas(800, 600);                 //keep set at 800*600
    ellipseMode(RADIUS);       
    
}

function draw () {
    background(0, 51, 17);                  //set background here to refresh frame continuously

    for (var i = 0; i < 800; i += 100) {    //lines for "football field"
        line(i, 0, i, 600);
        stroke(255);
    }
    

    x += speed;                             //increase speed
    if (x > width+radius+40) {              //if poistion of ball exceeds screen width and width +40 for oval shape of ball then reset position
        x =-radius;
    }
    noStroke();
    ellipse(x, 300, radius+40, radius);     //ball + 40 to elongate into football shape
    fill(255, 173, 51);                     //light blue

    
}