let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  // the new keyword instantiates a fresh instance of a class
  bubble1 = new Bubble(200, 200, 40, 255, 0, 0);
  bubble2 = new Bubble(400, 200, 20, 0, 255, 0);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
