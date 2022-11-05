function Cell(pos, r, c) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 30;
  this.c = c || color(random(0, 255), random(0, 255), random(0, 255), 150);

  this.offset = random(-this.r / 2, this.r / 2);

  this.clicked = function (x, y) {
    let d = dist(this.pos.x, this.pos.y, x, y);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  };

  this.mitosis = function () {
    // a little seperation for new cells
    this.pos.x += random(-this.r, this.r);

    let cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  };

  this.move = function () {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  };

  this.show = function () {
    let nukePos = this.offset;
    fill(this.c);
    stroke(50, 50);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    // show a nucleus
    fill(0, 50);
    ellipse(this.pos.x + nukePos, this.pos.y + nukePos, this.r * 0.3);
  };
}
