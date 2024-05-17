let walkers = [];
let step_size = 2;

function mousePressed() {
  append(walkers, new Walker(mouseX, mouseY, step_size));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].walk();
    walkers[i].show();
  }
}
