/*
April Kim
5 February 2023
N220 sp23
Class #23523
*/

/*----Create Tennis Ball constructor------
function TennisBall(x,y) {
    
    
}
------*/

/*----------Object Tall Rectangle A --include properties (x,y,width,height) ----x pos on left half of screen---*/

let tennisBallA = {
    xPos: 300,
    yPos: 350,
    color: "#bfff80",
    diameter: 50
}

let tennisBallB = {
    xPos: 700,
    yPos: 350,
    color: "#ff3333",
    diameter: 50
}

function setup () {
    createCanvas(1000, 700);
    background("#cccccc");
}

function draw(){
    fill(tennisBallA.color);
    ellipse(tennisBallA.xPos, tennisBallA.yPos, tennisBallA.diameter, tennisBallA.diameter);
        
    fill(tennisBallB.color);
    ellipse(tennisBallB.xPos, tennisBallB.yPos, tennisBallB.diameter, tennisBallB.diameter);

        if(keyIsPressed) {
            tennisBallA.xPos -= 1;
            tennisBallB.xPos += 1;
        }
}

/*----------Object Tall Rectangle B --include properties (x,y,width,height)-----x pos on right half of screen----*/
/*------if up key is pressed, Rect A goes up(iterate up the y axis) and Rect B goes down--(down the y axis-----------*/
/*------else if down key is pressed, Rect A goes down(iterate down the y axis) and Rect B goes up--( the y axis-------------*/
/*-------------------*/

/*---Create tennis ball constructor----

class TennisBall {
    constructor(type) {
        this.type = type;    //update the type accordingly
        this.x = x;
        this.y = y; 
        this.width = 50;
        this.height = 50;
    }
}
-----------------------------------------*/


/*-----Create function that moves the left ball towards the left and the right ball towards the right--*/

