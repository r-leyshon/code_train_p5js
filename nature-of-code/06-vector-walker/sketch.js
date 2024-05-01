let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 3; i++) {
    inv_col = random(["r", "g", "b"]);
    walkers[i] = new Walker(width / 2, height / 2, 3, inv_col);
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].walk();
    walkers[i].show();
  }
  
  // col = color(random(255), random(255), random(255));
  // print(col)
}
