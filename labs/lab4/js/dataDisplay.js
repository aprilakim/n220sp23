/*
April Kim
5 February 2023
N220 sp23
Class #23523
*/

/*-Create object with properties width, height, color, and position of ___ --*/
/*- draw object by refering to width, heigt, etc properties in object*
/*like a protoype or template?/
/*make a function that take an argument and draws the object accordingly*/


/*--Define rasberry object--*/

let raspberry ={
    radius: 20,
    color: "#7b1e5e",
    x: 350,
    y: 250
}

function setup() {
    createCanvas(800, 600);
    background(255, 230, 255);
}

function draw() {
    noStroke();
    fill(raspberry.color);
    ellipse(raspberry.x, raspberry.y, raspberry.radius, raspberry.radius);  //top center ellipse
    ellipse(raspberry.x + raspberry.radius -2, raspberry.y, raspberry.radius, raspberry.radius);
    ellipse(raspberry.x - raspberry.radius +2, raspberry.y, raspberry.radius, raspberry.radius);
    ellipse(raspberry.x + raspberry.radius *2-4, raspberry.y, raspberry.radius, raspberry.radius);
    ellipse(raspberry.x - raspberry.radius *2+4, raspberry.y, raspberry.radius, raspberry.radius);

    
    ellipse(raspberry.x, raspberry.y + raspberry.radius - 2, raspberry.radius, raspberry.radius);
    ellipse(raspberry.x + raspberry.radius -2 , raspberry.y + raspberry.radius - 2, raspberry.radius - 2, raspberry.radius);
    ellipse(raspberry.x - raspberry.radius +2, raspberry.y + + raspberry.radius - 2, raspberry.radius -2 , raspberry.radius);

    ellipse(raspberry.x, raspberry.y + raspberry.radius*2 - 4, raspberry.radius, raspberry.radius);
}