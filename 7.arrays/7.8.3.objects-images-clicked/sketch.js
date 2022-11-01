let bubbles = [];
let flower;
let butterflies = [];

function preload() {
  flower = loadImage("../../www/daisy.png");

  // loop to read in butterfly pngs
  for (let i = 0; i < 4; i++) {
    //   butterflies[i] = loadImage("www/butterflies/butterfly" + i + ".png");
    // }

    // use new template literal syntax

    butterflies[i] = loadImage(`../../www/butterflies/butterfly${i}.png`);
  }
}

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(40, 100);
    let b = new Bubble(x, y, r, random(butterflies));
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
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
