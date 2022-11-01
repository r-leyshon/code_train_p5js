let codeTrain;
let x = 400;
let y;
// preload allows prep of assets prior to setup func
function preload() {
  codeTrain = loadImage("../../www/cute-train.png");
}

function setup() {
  createCanvas(400, 400);
  y = 200;
}

function draw() {
  background(220);
  image(codeTrain, x, y, mouseX, mouseY);
  x--;
  if (x < -200) {
    x = 400;
    y = random(height) - 100;
  }
}
