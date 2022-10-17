let x = 0;
let y = 0;
let xspeed = 3;
let yspeed = 3;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  // x pos
  if (x < 0) {
    xspeed = +3;
  }
  if (x > width) {
    xspeed = -3;
  }
  x += xspeed;

  // ypos
  if (y > height) {
    yspeed = -3;
  }
  if (y < 0) {
    yspeed = +3;
  }
  y += yspeed;

  // dynamic fill
  fill(x, x - y, y);
  ellipse(x, y, 100, 100);
}
