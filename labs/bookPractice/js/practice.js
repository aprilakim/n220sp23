let xPos = 0;
let yPos = 10;

function setup(){
    createCanvas(400, 300);
}

function draw(){
    background(0);
    xPos++; 
    yPos++;             //animate the circle
    fill(255, 102, 179);           
    circle(xPos, yPos, 30);
}

