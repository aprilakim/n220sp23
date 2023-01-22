//var x = 280;
//var y = -100;
//var diameter = 380;

function setup() {
    createCanvas(480, 120);
    fill(0, 102);           //semi transparent
    noStroke();
   
}
function draw() {
    ellipse(mouseX, mouseY, 9, 9); //dots that follow the mouse
}
