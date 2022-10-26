class Bubble {
  constructor(x, y, r, red, green, blue, a) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = a;
  }
  // picks up the interaction from mousePressed
  // moving away from using mouseX and mouseY here, as these are global variables
  // functional purity
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d <= this.r) {
      // pop the bubble on click
      this.red = 0;
      this.green = 0;
      this.blue = 0;

    }
  }

  // dont need to declare with function in a class
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    noStroke();
    strokeWeight(4);
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }
}
