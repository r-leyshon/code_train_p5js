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
    if (mouseX > 250 && mouseX < 350 && mouseY < 250 && mouseY > 150) {
      fill(255, 0, 200);
  
      // hold to highlight
      if (mouseIsPressed) {
        fill(0, 255, 0);
      }
    }
  
    rect(300, 200, 100, 100);
  }
  