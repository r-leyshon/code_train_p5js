let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(300, 200, 100);
}

function draw() {
  background(0);

  let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
  if (d < 0.5 * bubble1.r + 0.5 * bubble2.r) {
    background(200, 0, 100);
  }

  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();
}

class Bubble {
  // first instance of a default argument
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d <= this.r) {
      return true;
    } else {
      return false;
    }
  }

  changeColor(bright) {
    this.brightness = bright;
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
