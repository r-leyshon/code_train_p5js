let slider;
let angle  = 0;
function setup() {
  createCanvas(200, 200);
  slider = createSlider(0, 255, 50);
  createP("This sketch creates a user input slider. But instead of allowing the user to control the background colour with the slider value, takes control of it with the value of a variable. This variable uses the `sin()` function to map the slider range (0 to 255) to the sin max min vals (-1 & 1).");
}

function draw() {
  let x = map(sin(angle), -1, 1, 0, 255);
  slider.value(x);

  background(slider.value());

  angle += 0.1;
}
