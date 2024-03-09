let inc = 0.01;
let start = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  let xoff = start;

  background(50);
  stroke(255);
  noFill();
  beginShape();

  for (let x = 0; x < width; x++) {
    vertex(x, noise(xoff) * height);
    xoff += inc;
  }
  endShape();

  start += inc;
}
