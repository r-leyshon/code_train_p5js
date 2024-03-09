let xoff1 = 0;
let xoff2 = 10000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height);

  c1 = color(x, y, 0);
  c2 = color(y, x, 255);
  background(c1);

  fill(c2);
  ellipse(x, y, 24, 24);

  xoff1 += 0.02;
  xoff2 += 0.02;
}
