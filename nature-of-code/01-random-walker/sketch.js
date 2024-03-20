let x = 700;
let y = 350;
let step_size = 5;

function setup() {
  createCanvas(1400, 700);
  background(0);
}

function draw() {
  direction = int(random(3));
  if (direction == 0) {
    x -= step_size;
  } else if (direction == 1) {
    x += step_size;
  } else if (direction == 2) {
    y -= step_size;
  } else {
    y += step_size;
  }
  x = constrain(x, step_size, width - step_size);
  y = constrain(y, step_size, height - step_size);
  r = (x / width) * 255;
  g = (y / height) * 255;
  // Invert b otherwise becomes black in topleft corner
  b = (1 - (r/255 * g/255)) * 255;

  stroke(r, g, b, 50);
  strokeWeight(step_size);
  point(x, y);

}
