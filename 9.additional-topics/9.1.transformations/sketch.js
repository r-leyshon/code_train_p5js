let angle = 0;

function setup() {
  createCanvas(400, 400);
  // as opposed to radians
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  // every time through draw translations
  // rest back to 0,0
  background(0);

  // push can be used to save the
  // state of the translation
  push();

  // move the origin
  translate(100, 100);
  rotate(angle);

  fill(170, 74, 68);
  rect(0, 0, 100, 50);

  // pop can be used to restore the
  // state of the translation
  pop();

  translate(300, 300);
  rotate(-angle);
  fill(240, 220, 130);
  rect(0, 0, 100, 50);
  angle = angle + 5;
}
