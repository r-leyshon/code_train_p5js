class Walker {
  constructor(x, y, step_size) {
    this.step_size = step_size;
    this.pos = createVector(x, y);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  walk() {
    this.pos.x = constrain(
      this.pos.x + random(this.step_size * -1, this.step_size),
      this.step_size,
      width - this.step_size
    );
    this.pos.y = constrain(
      this.pos.y + random(this.step_size * -1, this.step_size),
      this.step_size,
      height - this.step_size
    );
  }

  show() {
    let r,
      g,
      b = 0;
    r = (this.pos.x / width) * this.r;
    g = (this.pos.y / height) * this.g;
    b = constrain(r / g, 0.0, 1.0) * this.b;
    noStroke();
    fill(r, g, b, 40);
    ellipse(this.pos.x, this.pos.y, 5);
  }
}
