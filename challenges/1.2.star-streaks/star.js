class Star {
  constructor(x = random(-width, width), y = random(-height, height), z = random(width)) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.pz = this.z;

  }

  show() {
    let r = map(this.z, 0, width, 16, 0);

    noStroke();
    fill(248,212,229);
    ellipse(this.sx, this.sy, r);

        this.px = map(this.x / this.pz, 0, 1, 0, width);
        this.py = map(this.y / this.pz, 0, 1, 0, height);


    stroke(229,54,149);
    line(this.px, this.py, this.sx, this.sy);

  }

  update() {
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    this.z = this.z - speedY;

    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.sx = map(this.x / this.z, 0, 1, 0, width);
      this.sy = map(this.y / this.z, 0, 1, 0, height);
      this.r = map(this.z, 0, width, 16, 0);
      this.pz = this.z;


    }


  }
}
