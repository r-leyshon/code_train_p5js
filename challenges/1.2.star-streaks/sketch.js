let stars = [];
let speedY;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 800; i++) {
    star = new Star();
    stars.push(star);
  }
}

function draw() {
  speedY = map(mouseY, 0, height, 50, 2);
  background(34,29,83);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].update();
  }
}
