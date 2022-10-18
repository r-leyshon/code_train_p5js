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
  if (x < 0 || x > width) {
    xspeed = xspeed * -1;
  }
  x += xspeed;

  // ypos
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
  y += yspeed;

  // dynamic fill
  fill(x, x - y, y, random(x, y));
  ellipse(x, y, 100, 100);
}
