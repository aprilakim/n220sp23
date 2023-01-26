/*April Kim
23 January 2023
Class 23523
*/

/** Algorithm:  If ball has a diameter less than 200 then, 
 * For every frame count, increment the diameter until it reaches 100, 
 * If diameter is 200 or greater, then set the diameter to 1.
 * 
 */

var radius = 1;

function setup() {
    createCanvas(600, 400); 
    noStroke();
}

function draw() {
    background(102, 153, 255);
    var fr = frameRate();
    print(fr);
    ellipse(width/2, height/2, radius, radius); //ensure ball is in the center
    fill(255, 255, 153);
    
    if (fr ++) {                               //increase radius each time frame rate is incremented
        radius ++;
    }

    if (radius > 200) {                         // if radius reaches 200, reset to 1 
        radius = 1; 
    }
}