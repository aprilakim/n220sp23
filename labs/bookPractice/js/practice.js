let xPos = 0;

function setup(){
    createCanvas(400, 300);
}

function draw(){
    background(0);
    xPos++;                 //animate the circle
    circle(xPos, 200, 30);
}