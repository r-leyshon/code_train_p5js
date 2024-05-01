class Walker {
    constructor(x, y, step_size, invert_colour) {
      this.step_size = step_size;
      this.pos = createVector(x, y);
      this.invert_colour = invert_colour;
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
      this.r = (this.pos.x / width) * 255;
      this.g = (this.pos.y / height) * 255;
      // Invert b otherwise becomes black in topleft corner
      this.b = (1 - ((this.r / 255) * this.g) / 255) * 255;
  
      if (this.invert_colour == "r") {
        this.r = 255 - this.r;
      } else if (this.invert_colour == "g") {
        this.g = 255 - this.g;
      } else {
        this.b = 255 - this.b;
      }
  
      strokeWeight(7);
      noStroke();
      fill(this.r, this.g, this.b, 125);
      ellipse(this.pos.x, this.pos.y, 5);
    }
  }
  