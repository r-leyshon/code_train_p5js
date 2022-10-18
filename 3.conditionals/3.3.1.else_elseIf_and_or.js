function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
  
    stroke(255);
    strokeWeight(4);
    noFill();
    rectMode(CENTER);
    // conditional colour
    if (mouseX > 300) {
      fill(255, 0, 200);
    }
    // conditional shape
    if (mouseY > 300) {
      rect(300, 200, 100, 100);
    } else if (mouseY > 50 && mouseY < 299) {
      fill(0, 255, 0);
      ellipse(300, 200, 100);
    } else {
      ellipse(300, 200, 100, 100);
    }
  }
  