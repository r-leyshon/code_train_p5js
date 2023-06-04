class Star {
    constructor(
      colours = [color("#F15D21"), color("#EC0289"), color("#B2BB1C")]
    ) {
      this.x = random(width);
      this.y = random(height);
      this.size = random(0.25, 3);
      this.t = random(TAU);
      this.c = random(colours);
    }
    twinkle() {
      this.t += 0.1;
      var scale = this.size + sin(this.t) * 2;
      noStroke();
      fill(this.c);
      ellipse(this.x, this.y, scale, scale);
    }
  }
  