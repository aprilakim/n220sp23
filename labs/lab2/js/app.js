/*April Kim
22 January 2023
Class 23523
*/ 
//let xPos = 0;
//let yPos = 10;

var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup() {
    createCanvas(240, 120);
}

function draw() {
   background(204);
   for (var x = 20; x < width; x+=20) {
    var mx = mouseX / 10;
    var offsetA = random(-mx, mx);
    var offsetB = random(-mx,mx);
    line(x + offsetA, 20, x- offsetB, 100);
   }
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
