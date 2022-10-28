function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  // first local variable
  let x = 0;
  // need an exit condition
  while (x <= width) {
    fill(0, random(0, 255), random(0, 255));
    ellipse(x, 200, 25, 25);
    x += 50;
  }
  // and with a for loop
  for (var y = 0; y <= width; y += 20) {
    fill(random(0,255), 0, random(0, 255));
    ellipse(y, 300, 25, 25);
  }
  fill(mouseX+0.5*mouseY, mouseX, mouseY);
  ellipse(300, 100, 40, 40);

}
