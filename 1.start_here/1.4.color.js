function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    // When RGB are equal you get grayscale
    background(100, 100, 100);
    // for shorthand if grayscale is required, just use one value
    rectMode(CENTER);
    // default fill is white
    fill(0, 0, 255);
    // default stroke is black
    stroke(0, 255, 0);
    strokeWeight(1);
  
    rect(200, 200, 100, 100);
  
    // inherits style spec
    noFill();
    strokeWeight(8);
    ellipse(50, 50, 100, 75);
  
    // order means a lot. Overlapping, specifying style... Lets make a green ellipse.
    // add an rgba value for transparency
    fill(0, 255, 0, 100);
    noStroke();
    ellipse(350, 350, 100, 75);
  }
  