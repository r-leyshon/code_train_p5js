let slider;

function setup() {
  slider = createSlider(0, 10, 0.1);
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  let inc = map(slider.value(), 0, 10, 0.01, 0.15);

  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;

    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
  // noLoop();
}
