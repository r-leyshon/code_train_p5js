function setup() {
    // stuff that happens once goes here
    // you dont want to make multiple canvasses
    createCanvas(400, 300);
  }
  
  function draw() {
    // draw gets looped until the window is closed
    background(0);
  
    noStroke();
    fill(255);
    // we get the mouse coords for free!
    // these variables are available as system variables
    ellipse(mouseX, mouseY, 75, 75);
  
    // map color to mouseY!!
    fill(mouseY);
    ellipse(200, 150, 50);
  }
  