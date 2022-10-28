let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(300, 200, 100);
}

function draw() {
  background(0);

  if (bubble1.intersects(bubble2)) {
    background(200, 0, 100);
  }

  bubble1.show();
  bubble2.show();
  bubble1.move();
  //bubble2.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;
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

    if (d < 0.5 * this.r + 0.5 * other.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    fill(this.brightness, 70);
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r);
  }
}
