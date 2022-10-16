function setup() {
    createCanvas(400, 300);
    // by moving the background to setup(), we no longer re-render the background
    // this exposes a trail lkke a paint programme
    background(0);
  }
  
  function draw() {
    noStroke();
    fill(255, 50);
    circle(mouseX, mouseY, 24);
  }