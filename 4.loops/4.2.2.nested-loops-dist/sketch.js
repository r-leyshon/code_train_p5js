function setup() {
  createCanvas(600, 400);
}

function draw() {
  // flipbook analogy - draw lets you animate
  background(0);

  for (let x = 0; x <= width; x += 30) {
    // for each of the above values, lets now do this:
    for (let y = 0; y <= height; y += 30) {
      // use the distance from the mouse to set colour
      d = dist(x, y, mouseX, mouseY) * 2;
      stroke(d, 0.5 * d, 0.001 * d);
      strokeWeight(0.009 * d);

      fill(0.001 * d, 0.5 * d, 0.1 * d);
      ellipse(x, y, 25, 25);
    }
  }
}
