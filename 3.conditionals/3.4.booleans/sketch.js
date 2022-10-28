let on = false;
let insideRect;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // light in the room
  if (on) {
    background(255, 255, 0);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);

  // check if mouse is inside rectangle
  if (mouseX > 250 && mouseX < 350 && mouseY < 250 && mouseY > 150) {
    insideRect = true;
  } else {
    insideRect = false;
  }

  // conditional colour button
  if (insideRect) {
    fill(255, 0, 200);

    // hold to highlight
    if (mouseIsPressed) {
      fill(0, 255, 0);
    }
  }

  rect(300, 200, 100, 100);
}

// as we want a switch behaviour
// we change state of program
// outside of draw
function mousePressed() {
  if (insideRect) {
    // toggle a boolean with the not operator
    on = !on;
  }
}
