class Bubble {
  // adding in arguments here allows specifying at instantiation with new keyword
  constructor(x, y, r, img, daisy = flower) {
    this.x = x;
    this.y = y;
    this.r = r;
    // have an image associated with each flower object
    this.butterfly = img;
    this.whatToShow = daisy;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.whatToShow = this.butterfly;
    }
  }

  // dont need to declare with function in a class
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {

    image(this.whatToShow, this.x, this.y, this.r, this.r);
  }
}
