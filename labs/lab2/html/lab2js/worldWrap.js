/*April Kim
23 January 2023
Class 23523
*/


var radius = 80;
var x = -radius;
var speed = 1*1/12;                         //I was trying to figure out how to make the speed 5 pixels per second
                                            //if there are 60 frames per second and 5 goes into 60 12 times..
                                            //I multiplied 1 (1 = 100% speed= 60fps) * 1/12. I am probably overthinking. 
//var speed = 1;                            //in case you want to speed it up              

function setup() {
    createCanvas(800, 600);                 //keep set at 800*600
    ellipseMode(RADIUS);       
    
}

function draw () {
    background(0, 51, 17);                  //set background here to refresh frame continuously/ green
    for (var i = 0; i < 800; i += 100) {    // vertical lines for "football field"
        line(i, 0, i, 600);
        stroke(255);
    }
    
   
    x += speed;                             //increase speed
    if (x > width+radius+40) {              //if poistion of ball exceeds screen width and width +40 for oval shape of ball then reset position
        x =-radius;                         //reset position to just before canvas
    }
    noStroke();
    ellipse(x, 300, radius+40, radius);     //ball + 40 to elongate into football shape
    fill(255, 173, 51);                     //orange

    
}