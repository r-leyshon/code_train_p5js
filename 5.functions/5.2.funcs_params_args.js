function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(50);
  
    lollipop(100, 100, 50);
    lollipop(200, 250, 90);
  }
  
  function lollipop(x, y, d) {
    fill(0, 200, 255);
    rect(x - 10, y, 20, 150);
  
    fill(255, 0, 200);
    ellipse(x, y, d, d);
  }
  