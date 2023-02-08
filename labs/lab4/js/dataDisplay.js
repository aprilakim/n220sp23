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


let star = {
    width: 100,
    height: 100,
    color: "#ffff66",
    xPos: 350,
    yPos: 250,
};

function setup() {
    createCanvas(800, 600);
    background(0);
    

}

function draw() {
    fill(star.color);
    
    rect(star.xPos, star.yPos, star.width, star.height);
        if(mouseIsPressed){
            fill(star.color = "#4d79ff");
        }


}