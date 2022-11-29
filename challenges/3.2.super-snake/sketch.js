let s;
let scl = 20;
let food;
let current = 0;
let scoreRecord = [0];
let maxScore = 0;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
  createElement("br");
  scoreCard = createDiv();
  scoreCard.style("background-color", color("#425F57"));
  scoreCard.style("color", color("#A8E890"));

  scoreCard.style("padding", "3px");
  scoreCard.style("width", "597px");

  currTxt = createP("Current Score: " + current);
  currTxt.parent(scoreCard)

  maxTxt = createP("Maximum Score: " + maxScore);
  maxTxt.parent(scoreCard);
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  stroke(color("#A8E890"));
  background(color("#425F57"));
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  noStroke();
  fill(color("#CFFF8D"));
  rect(food.x, food.y, scl, scl);

  thisScore = s.score();
  scoreRecord.push(thisScore);

  maxTxt.html("Maximum Score: " + max(scoreRecord));

  currTxt.html("Current Score: " + thisScore);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}
