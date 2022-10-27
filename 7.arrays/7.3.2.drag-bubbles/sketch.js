let bubbles = [];

function setup() {
  createCanvas(1600, 900);
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r, random(255), random(255), random(255));
  // add the bubble object into the bubbles array
  // use push to add new valuables to the array
  bubbles.push(b);
}

function draw() {
  background(0);

  // I can refer to the number of bubbles set above by accessing the arrays length method

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
