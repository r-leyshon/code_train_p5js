class Drop {
  constructor(x = random(width), y = random(-500, -100), len = random(5, 15)) {
    this.x = x;
    this.y = y;
    this.len = len;
  }

  fall() {
    let yspeed = map(this.len, 5, 15, 2, 10);
    this.y = this.y + yspeed;

    // reset y when reach bottom of screen
    if (this.y > height) {
      this.y = random(-500, -100);
    }
  }

  show() {
    // add depth to sketch
    let z = map(this.len, 5, 15, 1, 7);
    let a = map(this.len, 5, 15, 215, 0);

    strokeWeight(z);
    stroke(138, 43, 226, a);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
