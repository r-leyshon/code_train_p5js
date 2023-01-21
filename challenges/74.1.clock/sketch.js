function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(106, 44, 102);

  let hr = hour();
  let mn = minute();
  let sc = second();

  noFill();
  translate(200, 200);

  rotate(-90);

  strokeWeight(8);

  stroke(184, 59, 94);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);
  push();
  rotate(end1);
  line(0, 0, 100, 0);
  pop();

  stroke(240, 138, 93);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);
  push();
  rotate(end2);
  line(0, 0, 75, 0);
  pop();

  stroke(249, 237, 105);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);
  push();
  rotate(end3);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}
