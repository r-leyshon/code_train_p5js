function setup() {
    createCanvas(windowWidth, windowHeight);
    c1 = color(200, 50, 0, 10);
    c2 = color(200, 100, 100, 100);
    background(50, 0, 40);
  }
  
  function gradientLine(x1, y1, x2, y2, color1, color2) {
    // linear gradient from start to end of line
    var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);
    this.drawingContext.strokeStyle = grad;
    line(x1, y1, x2, y2);
  }
  
  function draw() {
    translate(width / 2, height / 2);
    v = p5.Vector.random2D();
    // this will be length 1 by standard, so multiply by some length
    v.mult(windowWidth*0.3);
    strokeWeight(4);
  
    for (let i = 0; i <= width; i++) {
      gradientLine(0, 0, v.x, v.y, c1, c2);
    }
  }
  