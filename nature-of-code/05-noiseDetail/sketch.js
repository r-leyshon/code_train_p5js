let dropoffSlider;
let octaveSlider;
let inc = 0.01;
let start = 0;
function setup() {
  createCanvas(800, 600);
  let button = createButton("reset sketch");
  button.mousePressed(resetSketch);
  dropoffSlider = createSlider(0.0, 1.0, 0.5, 0.1);
  dropoffSlider.position(width - 140, height - 20);
  octaveSlider = createSlider(1, 10, 4, 1);
  octaveSlider.position(width - 140, height - 60);
  textSize(15);
  createP(
    "Adjust the sliders and click the apply button to adjust noiseDetail values."
  );
}

function resetSketch() {
  noiseDetail(octaveSlider.value(), dropoffSlider.value());
}

function draw() {
  let xoff = start;

  background(50);
  stroke(255);
  noFill();
  beginShape();

  for (let x = 0; x < width; x++) {
    // Constrain the noise value as noiseDetail dropoff > 0.5 can result in
    // noise values > 1.0
    vertex(x, constrain(noise(xoff), 0.01, 0.99) * height);
    xoff += inc;
  }
  endShape();

  start += inc;

  text("Noise Dropoff:", dropoffSlider.x + 5, dropoffSlider.y);
  text("n Octaves:", octaveSlider.x + 5, octaveSlider.y);
}
