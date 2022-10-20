let offset = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // flipbook analogy - draw lets you animate
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
  // for loop is for stuff on one page of your flipbook
  for (var y = 0; y <= width; y += 20) {
    fill(random(255), 0, random(255));
    ellipse(y + offset, 300, 25, 25);
  }

  // come out of the for loop to animate
  offset = offset + 1;
}
