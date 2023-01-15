function setup() {
    createCanvas(800,600);

    background(107,00,45);
   
    circle(300,300,110);
   
    stroke(217,135,237);
    strokeWeight(8);
    fill(100,100,123);
    rect(400,200,30,30);

    stroke(1);
    line(10,10,150,400);
}
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}