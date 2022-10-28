function setup() {
  createCanvas(600, 400);
}

function draw() {
  // flipbook analogy - draw lets you animate
  background(0);
  strokeWeight(4);
  stroke(255);

  for (let x = 0; x <= mouseX; x += 30) {
    // for each of the above values, lets now do this:
    for (let y = 0; y <= mouseY; y += 30) {
      fill(random(255), random(255), random(255));
      ellipse(x, y, 25, 25);
    }
  }
}
