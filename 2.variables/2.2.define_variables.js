let circleX = 0;
let circleY = 0;
let circleSize = 1;
let fillR = 0;
let fillG = 255;
let fillB = 0;

function setup() {
    createCanvas(300, 300);
  }

function mousePressed(){
  circleX = 0;
  circleY = 0;
  circleSize = 1;
  fillR = 0;
  fillG = 255;
  fillB = 0;
}

  
  function draw() {
    background(0);
    noStroke();
    fill(fillR, fillG, fillB);
    circle(circleX, circleY, circleSize);
    
    circleX += 1;
    circleY += 1;
    circleSize += 0.5;
    fillR += 1;
    fillG +- 1;
    fillB += 0.1;
  }
  

  