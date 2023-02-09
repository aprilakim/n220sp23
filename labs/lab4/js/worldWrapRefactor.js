/*
April Kim
5 February 2023
N220 sp23
Class #23523
*/


/*---World wrap ball gets turned into an object--*/
let ball = {
    radius: 80,
    speed : 1,
    color: "#ff3333",
    x: -80,
    y: 350
}

function setup() {
    createCanvas(1000, 700);
    ellipseMode(RADIUS); 
}

function draw() {
    background("#e6ffff");
    noStroke();
    fill(ball.color);
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
    
/*--increment ball until it reaches the width of screen + radius, and then resets--*/
    ball.x += ball.speed;
        if (ball.x > width + ball.radius) {
            ball.x =-ball.radius;
    }
}
