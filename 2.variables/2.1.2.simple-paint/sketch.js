function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  noStroke();
  fill(255, 50);
  circle(mouseX, mouseY, 24);
}

function mousePressed() {
  // by moving the background to mousePressed() you can rerender the background on mouse click
  background(0);
}
