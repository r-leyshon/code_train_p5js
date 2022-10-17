let x, y;
let r, g, b;

function setup() {
  // Dynamically pull the available window dimensions
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // if you give random one argument only, it assumes a min of 0
  r = random(255);
  g = 0;
  b = random(255);
  // width and height are available as system variables
  // based on the vals passed to createCanvas
  x = random(width);
  y = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
