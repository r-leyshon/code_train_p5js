let bubble1;
let bubble2;

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  // dont need to declare with function in a class
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

function setup() {
  createCanvas(600, 400);
  // the new keyword instantiates a fresh instance of a class
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
