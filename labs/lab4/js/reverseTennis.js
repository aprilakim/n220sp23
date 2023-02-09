/*
April Kim
5 February 2023
N220 sp23
Class #23523
*/



/*----------Object Tall Rectangle A --include properties (x,y,width,height) ----x pos on left half of screen---*/

let tennisBallA = {
    xPos: 300,
    yPos: 100,
    color: "#bfff80",
    width: 60,
    height: 500
}

/*----------Object Tall Rectangle B --include properties (x,y,width,height)-----x pos on right half of screen----*/
let tennisBallB = {
    xPos: 700,
    yPos: 100,
    color: "#ff3333",
    width: 60,
    height: 500
}

function setup () {
    createCanvas(1000, 700);
    
}

function draw(){
    background("#cccccc");
    fill(tennisBallA.color);
    rect(tennisBallA.xPos, tennisBallA.yPos, tennisBallA.width, tennisBallA.height);
        
    fill(tennisBallB.color);
    rect(tennisBallB.xPos, tennisBallB.yPos, tennisBallB.width, tennisBallB.height);

        /*------if up key is pressed, Rect A goes up(iterate up the y axis) and Rect B goes down--(down the y axis-----*/
        
       if (keyIsDown(UP_ARROW)) {
            tennisBallA.yPos -= 1;
            tennisBallB.yPos += 1; 
       }
       /*------if down key is pressed, Rect A goes down(iterate down the y axis) and Rect B goes up--( the y axis------*/
       if (keyIsDown(DOWN_ARROW)) {
            tennisBallA.yPos += 1;
            tennisBallB.yPos -= 1; 
       }
}



