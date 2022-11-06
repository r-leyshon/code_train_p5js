class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    // func allows to create a vector pointing in direction
    // of any angle
    this.dir = p5.Vector.fromAngle(angle);
  }

  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  show() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();
  }

  cast(wall) {
    //walls start points
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    // walls end points
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    // ray start point
    const x3 = this.pos.x;
    const y3 = this.pos.y;
    // ray start point plus direction of ray
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    // calculate the denominator
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    // if lines are parallel, the den will be 0
    if (den == 0) {
      // equivalent of return null
      return;
    }
    // numerators
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();
      // calculate the intersection
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;

    } else {
      return;
    }

  }
}
