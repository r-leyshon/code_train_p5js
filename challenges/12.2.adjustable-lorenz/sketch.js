let x = 0.01;
let y = 0;
let z = 0;
let origa = 10;
let origb = 28;
let origc = 8.0 / 3.0;

let a = origa;
let b = origb;
let c = origc;
let points = new Array();

let scaleSlider;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  colorMode(HSB);
  scaleSlider = createSlider(0, 10, 6, 0.5);
  scaleSlider.position(590, 20);

  sigmaIn = createInput("" + a);
  sigmaIn.position(590, 65);
  rhoIn = createInput("" + b);
  rhoIn.position(590, 95);
  betaIn = createInput("" + c);
  betaIn.position(590, 125);

  sigButton = createButton("sigma");
  sigButton.position(sigmaIn.x + sigmaIn.width, sigmaIn.y);
  sigButton.mousePressed(updateConsts);
  rhoButton = createButton("rho");
  rhoButton.position(rhoIn.x + rhoIn.width, rhoIn.y);
  rhoButton.mousePressed(updateConsts);
  resetButton = createButton("reset");
  resetButton.position(rhoIn.x + rhoIn.width, rhoIn.y + 60);

  betaButton = createButton("beta");
  betaButton.position(betaIn.x + betaIn.width, betaIn.y);
  betaButton.mousePressed(updateConsts);
  resetButton.mousePressed(resetSketch);

}

function updateConsts() {
  a = sigmaIn.value();
  b = rhoIn.value();
  c = betaIn.value();
}

function resetSketch() {
  a = origa;
  b = origb;
  c = origc;

}

function draw() {
  background(0);

  let dt = 0.005;
  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -200, 200);
  let camY = map(mouseY, 0, height, -200, 200);
  camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
  scale(scaleSlider.value());
  stroke(255);
  noFill();
  points.push(new p5.Vector(x, y, z));
  let hu_dir = 1;

  let hu = 0 * hu_dir;
  beginShape();

  for (let v of points) {
    stroke(hu, 255, 255);
    point(v.x, v.y, v.z);
    hu += 0.1;
    if (hu > 255) {
      hu_dir = hu_dir * -1;
    }
  }

  endShape();
}
