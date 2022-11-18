let drips = [];
function setup() {
  createCanvas(640, 360);

  for (let i = 0; i < 600; i++) {

    drip = new Drop();
    drips.push(drip)
  }


}

function draw() {
  background(230, 230, 250);

  // rain
  for (let j = 0; j < drips.length; j++) {
  drips[j].show();
  drips[j].fall();
  }
}
