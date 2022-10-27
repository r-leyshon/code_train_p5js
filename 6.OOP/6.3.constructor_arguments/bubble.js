class Bubble {
  // adding in arguments here allows specifying at instantiation with new keyword
  constructor(x, y, r, red, green, blue) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;

  }
  // dont need to declare with function in a class
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.r*2);
  }
}
