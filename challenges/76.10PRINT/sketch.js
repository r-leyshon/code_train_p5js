let x = 0;
let y = 0;
let inc = 10;

function setup() {
  createCanvas(400, 400);
  background(32,46,42);
}

function draw() {
  stroke(151,198,172);
  strokeWeight(2);

  if (random(1) < 0.5) {
    line(x, y, x + inc, y + inc);
  } else {
    line(x, y + inc, x + inc, y);
  }

  x = x + inc;

  if (x > width) {
    x = 0;
    y = y + inc;
  }
}
