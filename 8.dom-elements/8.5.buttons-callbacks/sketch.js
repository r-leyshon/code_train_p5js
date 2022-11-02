let x = 200;
let y = 200;
let bgColour;
let sqColour;
let palButt;
let dirButt;
let dir = 1;

function setup() {
  createCanvas(400, 400);
  h1 = createElement("h1", "Click the page...");
  mouse_loc = createElement("p", mouseX + ", " + mouseY);
  bgColour = color(200);
  sqColour = color(255, 0, 0);
  palButt = createButton("Change palette");
  palButt.mousePressed(changeColour);
  dirButt = createButton("Change direction");
  dirButt.mousePressed(changeDir);
}

function changeColour() {
  bgColour = color(random(255), random(255), random(255));
  sqColour = color(random(255), random(255), random(255));
}

function changeDir() {
  dir = dir * -1;
}

function mousePressed() {
  createP("Coordinate updated!");
  h1.html("Thank you.");
  mouse_loc.html(mouseX + ", " + mouseY);
}

function draw() {
  background(bgColour);
  fill(sqColour);
  rectMode(CENTER);
  if (dir == 1) {
    x = x + random(-3, 3);
  } else {
    y = y + random(-3, 3);
  }

  rect(x, y, 50, 50);
  h1.position(x, 400);
}
