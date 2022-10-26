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
  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d <= this.r) {
      // mix up colours on click
      this.red = this.green;
      this.green = this.blue;
      this.blue = this.red;
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
