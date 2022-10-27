let lolly;
let lolly1;

class Lolly {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.dia = 50;
    this.len = 180;
  }

  sweet() {
    fill(0, 200, 255);
    rect(this.x - 10, this.y, 20, this.len);
  }

  stick() {
    fill(255, 0, 200);
    ellipse(this.x, this.y, this.dia);
  }
}

function setup() {
  createCanvas(600, 400);
  lolly = new Lolly();
  lolly1 = new Lolly();
}

function draw() {
  background(50);
  lolly.sweet();
  lolly.stick();
  lolly1.x = 350;
  lolly1.dia = 150;
  lolly1.len = 140;
  lolly1.sweet();
  lolly1.stick();
}
