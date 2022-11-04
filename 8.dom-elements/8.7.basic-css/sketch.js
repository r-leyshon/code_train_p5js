let x = 200;
let y = 200;
let bgColour;
let sqColour;
let palButt;

function setup() {
  createCanvas(400, 400);
  // styling directly from p5js
  inlineStyled = createP(
    "This paragraph was styled using p5.js. One limitation found so far is that only one callback can be attached to a button. In previous tutorials, the button adjusted the colour of canvas elements. That additional callback function needed to be removed in order to style the dom elements. The styling of the canvas elements was then moved into the same single callback function attached to the button."
  );
  inlineStyled.style("background-color", "pink");

  bgColour = color(200);
  sqColour = color(255, 0, 0);
  palButt = createButton("Change palette");
  // style the palette button
  palButt.mousePressed(changeStyle);
}

pickACol = function () {
  col = color(random(255), random(255), random(255));
  return col;
};

function changeStyle() {
  palButt.style("color", pickACol());
  palButt.style("background-color", pickACol());
  inlineStyled.style("color", pickACol());
  inlineStyled.style("background-color", pickACol());
  // style canvas elements
  bgColour = pickACol();
  sqColour = pickACol();
}

function draw() {
  background(bgColour);
  fill(sqColour);
  rectMode(CENTER);
  ellipse(x, y, 80);
}
