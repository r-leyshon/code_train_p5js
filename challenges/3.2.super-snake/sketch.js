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
  currTxt = createP("Current Score: " + current);
  currTxt.style("color", "white");
  currTxt.style("padding", "3px");
  currTxt.style("background-color", "black");

  maxTxt = createP("Maximum Score: " + maxScore)
  maxTxt.style("background-color", "black");
  maxTxt.style("padding", "3px");
  maxTxt.style("color", "white");
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(50);
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
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
