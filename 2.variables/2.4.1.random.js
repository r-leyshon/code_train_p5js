// random is a p5 func, so cannot be used to define outside of setup or draw
let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 300);
  squareSize = random(50, 100);
  lineWidth = random(2, 10);
}

function draw() {
  background(100);
  
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255);
  fill(0, 255, 0);
  square(200, 150, squareSize);
}
