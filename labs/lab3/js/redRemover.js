/*
April Kim
29 January 2023
Class 23523
*/

//Create a variable for the red part of (r,g,b) 
//Use for loop to increment the value of red variable, starting at red and fading to not red In a function
//Create an instance that tests the function with drawing a circle

//can add red to the circle that disappears

            


function setup() {
    createCanvas(800, 600);

}

function draw() {
    background(200, 70, 110); 
    noStroke();
    ellipse(mouseX, mouseY, 90, 90);            //circle that tracks mouse movement
   let noRed = removeRed(color(170, 200, 150));  // create a variable that stores the 
   fill(noRed);                                 //
}

function removeRed(c){
     c.setRed(0);
     return c;
}