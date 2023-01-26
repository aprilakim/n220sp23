/*April Kim
23 January 2023
Class 23523
*/


var radius = 80;
var x = -radius;
var speed = 2;

function setup() {
    createCanvas(800, 600);               //keep set at 800*600
    ellipseMode(RADIUS);       
    noStroke(); 

}

function draw () {
    background(0, 51, 17);
   // background(0, 26, 51);               //set background here to refresh frame continuously
    x += speed;                          //increase speed
    if (x > width+radius) {              //if poistion of ball exceeds screen width and width of ball then reset position
        x =-radius;
    }
    ellipse(x, 300, radius, radius);     //ball
    fill(255, 173, 51);                 //light blue
}