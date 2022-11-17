let angle = 0;
let w = 24;
let ma;
let maxD;
let frames = 60;
function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(PI));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  // orthographic projection
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(-ma);

  rotateY(-QUARTER_PI);

  // offset the rectangle oscillations
  for (let z = 0; z < height; z += w) {
    // create the rectangle series
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);

      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w , h, w);
      //rect(x - width / 2 + w/2, 0, w-2, h);
      pop();
    }
  }
  angle -= TWO_PI / frames;
}
