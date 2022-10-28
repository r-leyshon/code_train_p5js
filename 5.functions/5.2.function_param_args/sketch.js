function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);

  lollipop(100, 100, 50, 180);
  lollipop(200, 250, 90, 90);
  lollipop(300, 50, 180, 300);

}

function lollipop(x, y, d, l) {
  fill(0, 200, 255);
  rect(x - 10, y, 20, l);

  fill(255, 0, 200);
  ellipse(x, y, d, d);
}
