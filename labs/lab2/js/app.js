/*April Kim
22 January 2023
Class 23523
*/ 
//let xPos = 0;
//let yPos = 10;

var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(240, 120);
    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    x += speed;         //increase the value of x
    if (x > width+radius){
        x = -radius;
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
}

/*
function draw(){
    var fr = frameRate(30);
    print(fr);
    background(0);
    xPos++; 
    yPos++;             //animate the circle
    fill(255, 102, 179);           
    circle(xPos, yPos, 30);
}
*/
