//April Kim
//17 January 2023
//Class 23523

var radius = 420;
var a = 25;
var head = 150;

function setup() {
    createCanvas(800,600);
    background(255, 204, 224); //light pink background
    noStroke();                //no lines visible on any shape
}
function draw() {
    //fill(255, 255, 179);        //light yellow
    fill(0);                               // black cat (for now)
    ellipse(400, 300, radius*1.5, radius);  //cat ellipse face
    fill(255);
    ellipse(250, 250, radius/2.5, radius/2.5);//left eye
    ellipse(550, 250, radius/2.5, radius/2.5);//right eye

    fill(0);
    ellipse(250, 250, radius/4, radius/4);    //left pupil
    ellipse(550, 250, radius/4, radius/4);    //right pupil

    triangle(225, a, 200, head, 300, head);   //left ear
    triangle(575, a, 500, head, 600, head);   //right ear

    fill(255, 204, 224);
    triangle(400, 385, 350, 325, 450, 325);   //nose

    fill(255);
    strokeWeight(3);
    line(350, 350, 375, 325);
    
    //fill(100);
    //ellipse(400, 300, radius/4, radius/4);

    //rect(215, 125, 375, 360); //made a temporary frame to help place letter
    

  //  beginShape();               //letter "A" top & right side
    // fill(153, 153, 255);
  //  vertex(350, 125);
  //  vertex(450, 125);
  //  vertex(600, 450);
  //  vertex(550, 450);
  //  vertex(450, 250);
  //  endShape();

  //  beginShape();               //letter "A" left side
  //  fill(153, 153, 255);
  //  vertex(350, 250);
   // vertex(250, 450);
   // vertex(200, 450);
 //   vertex(350, 125);
 //   vertex(400, 175);
 //   endShape();

  //  beginShape();               //letter "A" middle connecting line
  //  fill(153, 153, 255);
  //  vertex(350, 250);
 //   vertex(450, 250);
 //   vertex(470, 290);
 //   vertex(330, 290);
 //   endShape();


  //  fill(255, 204, 224);        //letter "A" center triangle
 //   triangle(400, 165, 350, 250, 450, 250);


}