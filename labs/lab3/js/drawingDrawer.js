/*
April Kim
29 January 2023
Class 23523
*/

//Create design/shape and block it into a (draw) function
//Set variables for x and y so that they can be incremented/ 
//move around (in a for loop?)
//Set variables for mouseX & mouseY similar to above step so
// mouse movement can be tracked and updated
//Call draw function 3 different times with different x & y 
//values so that 3 images appear simultaneously

radius = 80;
var bodyHeight = 150;
var bodyWidth = 35;
eyer = 7;      
mouthWidth = 50;                                          //eye radius
offsetLimbs = 20;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0); 

    noStroke();
    ellipse(mouseX, mouseY, radius, radius);            //gingerbread head
    rect(mouseX-18, mouseY, bodyWidth , bodyHeight);    //gingerbread body
    ellipse(mouseX-20, mouseY+70, radius,radius/2);     //left arm
    ellipse(mouseX+20, mouseY+70, radius,radius/2);     //right arm
    ellipse(mouseX-20, mouseY+120, radius,radius/2);
    ellipse(mouseX+20, mouseY+120, radius,radius/2);

    fill(255);                                          
    ellipse(mouseX+15, mouseY-8, eyer, eyer);           //right eye
    ellipse(mouseX-15, mouseY-8, eyer, eyer);           //left eye
    arc(mouseX, mouseY+10, mouthWidth, 20, TWO_PI, PI); //MOUTH

    
    fill(179, 89, 0);                                   //gingerbread brown
}