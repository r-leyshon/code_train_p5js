let sliders = [];
let angle = 0;
let control1;
function setup() {
  noCanvas();
  control1 = createSlider(0, 100, 50);
  control1.id("controller");


  for (let i = 0; i < 100; i++) {
    sliders[i] = createSlider(0, 255, 50);

  }
  createP(
    "Drag the red slider to control the offset value of the other silders. As the slider values are set with the `sin()` function, the effect is to control the frequency of the slider values."
  );
}

function draw() {
  let offset = 0;
  let controlVal = map(control1.value(), 0, 100, 0.001, 0.9)

  for (let i = 0; i < sliders.length; i++) {
    let x = map(sin(angle+offset), -1, 1, 0, 255);
    sliders[i].value(x);
    offset += controlVal;
  }
    angle += 0.1;

}
