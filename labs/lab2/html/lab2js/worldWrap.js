/*April Kim
23 January 2023
Class 23523
*/

/**Algorithm: 
 * Use frame Count function with parameter set at 5 pixels per frame. 
 * If x is greater than the width of the screen plus the radius of ball, 
 * move ball to left edge with -radius. 
 */

var radius = 60;                //set radius of ball
var x = -radius;
var fr = 5;

function setup() {
    createCanvas(800, 600);     //keep set at 800*600
    frameRate(fr);              //set the frame rate to 5 px per sec
    ellipseMode(RADIUS);        //calculates radius as needed?
}

function draw () {
    
    background(0);
    x += fr;                    //move the ball by an increment of 5 or fr value
    if (x > width + radius) {
        x = -radius;
    }
    ellipse(20, 200, radius, radius);
}