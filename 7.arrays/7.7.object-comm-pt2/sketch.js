let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);

  // new style for loop as of es6 ver of JS
  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      // don't want to check a bubble against itself
      if (b != other && b.intersects(other)) {
        overlapping = true;
      }
      if (overlapping) {
        b.changeColor(255);
      } else {
        b.changeColor(0);
      }
    }
  }
}

class Bubble {
  // first instance of a default argument
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  // moving intersection logic to within class
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    // condensed
    return d < 0.5 * this.r + 0.5 * other.r;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  show() {
    fill(this.brightness);
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r);
  }
}
