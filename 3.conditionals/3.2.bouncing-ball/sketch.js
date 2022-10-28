let x = 0;
let y = 5;
let xspeed = 60;
let yspeed = 6;

function setup() {
  createCanvas(1600, 900);
  background(0);
}

function draw() {
  // x pos
  if (x < 0) {
    xspeed = -1*xspeed;
  }
  if (x > width) {
    xspeed = -1*xspeed;
  }
  x += xspeed;

  // ypos
  if (y > height) {
    yspeed = -1 * yspeed;
  }
  if (y < 0) {
    yspeed = -1*yspeed;
  }
  y += yspeed;

  // dynamic fill
  noStroke();
  fill(x, x - y, y, 80);
  ellipse(x, y, 100, 100);
}
