// random is a p5 func, so cannot be used to define outside of setup or draw
let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 300);
  // dont update background
  background(100);

}

function draw() {
  // move squareSize to update continuously
  squareSize = random(5, 250);
  lineWidth = random(4, 28);

  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 10);
  fill(0, 255, 0, 10);
  square(200, 150, squareSize);
}
