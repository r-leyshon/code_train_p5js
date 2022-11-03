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
  txtin1 = createInput("Changed action:");
  txtin2 = createInput("Input action:");

  txtout = createElement("p", "placeholder");
  txtout1 = createElement("p", "Changed action:");
  txtout2 = createElement("p", "Input action");

  txtout.mouseOver(changeTxt);
  txtout.mouseOut(outTxt);

  // use changed to control input updateing dom elements
  // only updates when you press enter or tab
  txtin1.changed(updateText1);
  txtin2.input(updateText2);
}

function updateText1() {
  txtout1.html(txtin1.value());
}

function updateText2() {
  txtout2.html(txtin2.value());
}

function changeTxt() {
  txtout.html("your mouse is over me");
}

function outTxt() {
  txtout.html("Your mouse is out!");
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

  text(txtin1.value(), 10, 20);
  text(txtin2.value(), 10, 40);
}
