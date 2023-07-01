let d = 0;
let perc_ang = 180;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  frameRate(10);
}

function draw() {
  background("#D1D6EC");

  noFill();
  stroke("#A59EC6");
  strokeWeight(1);

  arc(200, 200, 200, 200, 180, 360);
  stroke("#301250");

  // Draw the arc completion
  d = day();
  perc_ang = map(d, 0, 31, 180, 360);
  perc = round((d / 31) * 100, 1);
  strokeWeight(10);

  // color gradient for the arc
  c1 = color("#301250");
  c2 = color("#8C3D7E");
  for (let y = 180; y < perc_ang; y++) {
    n = map(y, 180, 360, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    arc(200, 200, 200, 200, y, perc_ang);
  }

  // Output the text
  noStroke();
  fill("#4B3D8C");
  textAlign(CENTER);
  textSize(20);

  text(perc + " % done", 200, 205);
  num_pressups = d * 100;

  text(num_pressups + " / 3100 press ups done", 200, 235);

  textSize(30);
  fill("#301250");

  text("100 push ups a day in July", 200, 50);
  text("For Great Ormond Street \nChildren's Charity", 200, 350);
}
