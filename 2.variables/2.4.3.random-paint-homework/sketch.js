let fillR,
  fillG,
  fillB = 0;

function setup() {
  createCanvas(400, 300);
  background(0);
}

function mouseClicked() {
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
}

function draw() {
  noStroke();
  fill(fillR, fillG, fillB, 50);
  circle(mouseX, mouseY, random(10, 50));
}
