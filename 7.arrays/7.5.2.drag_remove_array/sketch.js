let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged() {
  let r = 40;
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }

    bubbles[i].move();
    bubbles[i].show();
  }

  // keep only 20 bubbles with splice
  if (bubbles.length > 20) {
    bubbles.splice(0, 1);
  }
}

class Bubble {
  constructor(x, y, r) {
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
