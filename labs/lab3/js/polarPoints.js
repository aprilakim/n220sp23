/*
April Kim
29 January 2023
Class 23523
*/

//polarPoint function contains a variable "x" that has the formula r * Math.sin(mouseX)
//polarPoint function contains a variable "y" that has the formula r * Math.cos(mouseY)
//return createVector(x,y)


//create object instance
//Set a variable that is equal to the same value as return createVector(x.y)

//draw circle in the object 

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(204, 255, 153);
    translate(100, 100);                //Set a new point of origin with translate function
   // let res = polarPoint(createVector());
    ellipse(res.x, res.y, 10, 10);
    polarPoint();
    
;}

function polarPoint(r) {                //create Cartesian grid 
    let x = r * Math.sin(mouseX);           
    let y = r * Math.cos(mouseX);
    return createVector(x, y);
    
}