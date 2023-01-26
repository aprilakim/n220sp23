var radius = 40;
var x = -radius;                //makes the ball start before the canvas instead of after the canvas
var speed = 1;

function setup() {
    createCanvas(240, 120);
    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    x += speed;
    if (x > width + radius) {    // if ball is past the width + radius (off screen)
        x = - radius;            //reset ball to before the canvas
    }

    arc(x, 60, radius, radius, 0.52, 5.76);
}
