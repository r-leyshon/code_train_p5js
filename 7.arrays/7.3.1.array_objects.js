let bubbles = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 400; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 40);
    bubbles[i] = new Bubble(x, y, r, random(255), random(255), random(255), 90);
  }
}

function draw() {
  background(0);

  // I can refer to the number of bubbles set above by accessing the arrays length method

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
