class Star {
  constructor(x = random(-width, width), y = random(-height, height), z = random(width)) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
  }

  show() {
    let r = map(this.z, 0, width, 16, 0);

    noStroke();
    fill(255);
    ellipse(this.sx, this.sy, r);
  }

  update() {
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.z = this.z - speedY;

    if (this.z < 1) {
      this.z = width;
      this.sx = map(this.x / this.z, 0, 1, 0, width);
      this.sy = map(this.y / this.z, 0, 1, 0, height);
      this.r = map(this.z, 0, width, 16, 0);

    }


  }
}
