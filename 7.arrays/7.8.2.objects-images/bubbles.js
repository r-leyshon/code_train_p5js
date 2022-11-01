class Bubble {
  // adding in arguments here allows specifying at instantiation with new keyword
  constructor(x, y, r, red, green, blue, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }

  // dont need to declare with function in a class
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
    image(flower, this.x, this.y, this.r, this.r);
  }
}
