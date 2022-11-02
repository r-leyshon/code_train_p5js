let x = 200;
let y = 200;
let bgColour;
let sqColour;
let palButt;
let slidy;
let txtin;
let txtout;

function setup() {
  createCanvas(400, 400);
  bgColour = color(200);
  sqColour = color(255, 0, 0);
  palButt = createButton("Change palette");
  palButt.mousePressed(changeColour);
  slidy = createSlider(10, 200, 100);
  txtin = createInput("Type your name:");
  txtout = createElement("p", "");
}

function changeColour() {
  bgColour = color(random(255), random(255), random(255));
  sqColour = color(random(255), random(255), random(255));
}


function draw() {
  background(bgColour);
  fill(sqColour);
  rectMode(CENTER);

  x = x + random(-3, 3);

  ellipse(x, y, slidy.value());

  text(txtin.value(), 10, 20);
  txtout.html(txtin.value())
}
