let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 80);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      // use splice to remove from array
      // at index i, 1 object
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  // if manipulating an array while iterating over it,
  // be careful - the index is changing as you splice
  // safer to iterate backwards
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }

    bubbles[i].move();
    bubbles[i].show();
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
    fill(this.brightness);
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r);
  }
}
