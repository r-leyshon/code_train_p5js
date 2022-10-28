let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  //below makes a red canvas
  //extraCanvas.background(255, 0, 0);
  // below makes a clear canvas
  extraCanvas.clear();
  background(0);
}

function draw() {
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);

  // but we want the circle to have trails
  image(extraCanvas, 0, 0);
  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 20, 20);
  }

  // we want the rect to have no trails but be in front of the ellipse

  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}
