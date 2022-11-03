let ship;
let flowers = [];
let drips = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();

  for (let i = 0; i < 10; i++) {
    flowers[i] = new Flower(i * 50 + 60, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();

    let edge = false;
    if (
      flowers[i].x + flowers[i].r == width ||
      flowers[i].x - flowers[i].r == 0
    ) {
      edge = true;
    }

    if (edge) {
      for (let i = 0; i < flowers.length; i++) {
        flowers[i].shiftDown();
      }
    }
  }

  for (let i = 0; i < drips.length; i++) {
    drips[i].show();
    drips[i].move();

    // check for intersection with flowers
    for (let j = 0; j < flowers.length; j++) {
      if (drips[i].hits(flowers[j])) {
        flowers[j].kaboom();
        if (flowers[j].toDelete) {
          flowers.splice(j, 1);
        }
      }
    }
  }
}

function keyReleased() {
  if (key != " ") {

      ship.setDir(0);

  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(3);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-3);
  }

  if (key === " ") {
    let drip = new Drip(ship.x, height - 60);
    drips.push(drip);
  }
}
