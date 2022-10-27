let nums = [100, 25, 46, 72];

// num simple var to control radius
let num = 23;

let cols = [0, 50, 100, 150, 200, 250];
let len = cols.length - 1;

function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(0);

    function pick_a_col() {

    // round is p5js so cannot be global func
  r = cols[round(random(len))];
    g = cols[round(random(len))];
  b = cols[round(random(len))];
  return r, g, b;

}

  for(let i = 0; i < 4; i++){
    stroke(255);
    fill(pick_a_col());
      ellipse(i*100+100, 200, nums[i]);
  }

}
