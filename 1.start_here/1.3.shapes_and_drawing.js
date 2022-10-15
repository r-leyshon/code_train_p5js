function setup() {
    createCanvas(200, 400);
  }
  
  function draw() {
    background(220, 0, 300);
    //cartesian coords, origin starts at top left
    // the width of this canvas includes pixels 0 to 199 (exclusive indexing)
    // arg order rect(x,y,wid,hgt)
    rect(50, 100, 100, 30);
    rect(50, 150, 100, 30, 90);
    line(0, 140, 200, 140);
    //Using rectMode you can start your rectangle from a different origin
    //rectMode(CENTER);
  }
  