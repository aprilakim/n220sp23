//var x = 280;
//var y = -100;
//var diameter = 380;

function setup() {
    createCanvas(240, 120);
    strokeWeight(12);
   
}
function draw() {
    background(204);                
    stroke(255);
    line(120, 60, mouseX, mouseY);
    stroke(0);
    var mx = map(mouseX, 0, width, 60, 180); //map 
    line(120, 60, mx, mouseY);
}
