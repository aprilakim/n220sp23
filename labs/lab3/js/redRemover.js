/*
April Kim
29 January 2023
Class 23523
*/

//Create a variable for the red part of (r,g,b) 
//Use for loop to increment the value of red variable, starting at red and fading to not red In a function
//Create an instance that tests the function with drawing a circle

//let x = 0;

//let noRed = removeRed(color(170, 200, 150));
//fill(noRed);
//x = x + 1;
//red = 255
//color = 255;


function setup() {
    createCanvas(800, 600);

}

function draw() {
    background(200, 70, 110); 
    noStroke();
    ellipse(mouseX, mouseY, 80, 80);
    fill(255,0,0);
   // removeRed();
}
/*
function removeRed(color){
    let noRed = removeRed(color(170, 200, 150));
    fill(noRed);
    red.setRed(0)
}
*/