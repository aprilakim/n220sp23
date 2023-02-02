/*
April Kim
29 January 2023
Class 23523
*/

//Create a variable for the red part of (r,g,b) 
//Use for loop to increment the value of red variable, starting at red and fading to not red In a function
//Create an instance that tests the function with drawing a circle


let red = 255             


function setup() {
    createCanvas(800, 600);

}

function draw() {
    red = red - 1                               //gradually fades to black
        if (red <10) red = 255;                 //resets to red
    background(200, 70, 110); 
    noStroke();
    ellipse(mouseX, mouseY, 90, 90);
    fill(red,0,0);
   // removeRed();                              //need to add a removeRed function
}

