//April Kim
//17 January 2023
//Class 23523

var radius = 420;
var a = 25;
var head = 150;
var whiskerX = 400;
var whiskerY = 365;

function setup() {
    createCanvas(800,600);
    background(255, 204, 224); //light pink background
    
}
function draw() {
    //fill(255, 255, 179);        //light yellow
    noStroke();
    fill(0);                               // black cat (for now)
    ellipse(400, 300, radius*1.5, radius);  //cat ellipse face
    fill(255);
    ellipse(250, 250, radius/2.7, radius/2.7);//left eye
    ellipse(550, 250, radius/2.7, radius/2.7);//right eye

    fill(0);
    ellipse(250, 250, radius/4, radius/4);    //left pupil
    ellipse(550, 250, radius/4, radius/4);    //right pupil

    triangle(225, a, 200, head, 300, head);   //left ear
    triangle(575, a, 500, head, 600, head);   //right ear

    fill(255, 204, 224);
    triangle(400, 385, 350, 325, 450, 325);   //nose

    stroke(255);                            //white whiskers
    strokeWeight(3);
    //ellipse(400, 355, 4, 4);              //setting a point for whiskers
    line(whiskerX, whiskerY, 225, 335);     //left top whisker
    line(whiskerX, whiskerY, 225, 370);     //left middle whisker
    line(whiskerX, whiskerY, 225, 400);     //left bottom whisker
    line(whiskerX, whiskerY, 575, 340);     //right top 
    line(whiskerX, whiskerY, 575, 370);     //right middle
    line(whiskerX, whiskerY, 575, 400);     //right bottom whisker
    
   

}