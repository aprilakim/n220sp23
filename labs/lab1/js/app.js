//April Kim
//17 January 2023
//Class 23523




function setup() {
    createCanvas(800,600);
    background(255, 204, 224); //light pink background
    noStroke();                //no lines visible on any shape
}
function draw() {
    fill(255, 255, 179);        //light yellow
    ellipse(400, 300, 520, 520);//circle

    //rect(215, 125, 375, 360); //made a temporary frame to help place letter
    

    beginShape();               //letter "A" top & right side
    fill(153, 153, 255);
    //fill(204, 230, 255);
    vertex(350, 125);
    vertex(450, 125);
    vertex(600, 450);
    vertex(550, 450);
    vertex(450, 250);
    endShape();

    beginShape();               //letter "A" left side
    fill(153, 153, 255);
    vertex(350, 250);
    vertex(250, 450);
    vertex(200, 450);
    vertex(350, 125);
    vertex(400, 175);
    endShape();

    beginShape();               //letter "A" middle connecting line
    fill(153, 153, 255);
    vertex(350, 250);
    vertex(450, 250);
    vertex(470, 290);
    vertex(330, 290);
    endShape();


    fill(255, 204, 224);        //letter "A" center triangle
    triangle(400, 165, 350, 250, 450, 250);
   

}