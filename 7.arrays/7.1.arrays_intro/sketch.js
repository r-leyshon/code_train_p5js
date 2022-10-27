let nums = [100, 25, 46, 72];
let words = ["rainbow", "heart", "purple", "friendship", "love", "foobar"];

// index controls word cycling
let index = 0;
function mousePressed() {
  index++;
  // reset index
  if (index == words.length) {
    index = 0;
  }
}

// num simple var to control radius
let num = 23;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipse(100, 200, num, num);

  ellipse(200, 200, nums[2], nums[2]);

  fill(255);
  text(words[index], 12, 200);
}
