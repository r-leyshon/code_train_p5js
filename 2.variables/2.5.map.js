var col = 0;
var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // the below approach works, but as soon as you get to x = 255, its completely white...
  //col = mouseX;
  // you can kind of get there by adjusting
  // col = mouseX / 2;
  // to get a perfect mapping, use map()
  col = map(mouseX, 0, 600, 0, 255);
  background(col);
  //ellipse
  r = map(mouseX, 0, 600, 0, 255);
  // map can invert your range for you
  b = map(mouseX, 0, 600, 255, 0);
  fill(r, 0, b);
  ellipse(mouseX, 200, 64, 64);
}
