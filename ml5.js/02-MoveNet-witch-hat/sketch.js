let video;
let bodyPose;
let poses = [];

function preload() {
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
}

function gotPoses(results) {
  poses = results;
}

function mousePressed() {
  console.log(poses);
}

function setup() {
  createCanvas(800, 800);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  image(video, 0, 0);

  if (poses.length > 0) {
    let pose = poses[0];
    noStroke();
    // let's draw a triangle hat. Top of hat should be above nose.
    // nose
    let x = pose.nose.x;
    let y = pose.nose.y - 320;
    // left corner of hat above ear
    let x1 = pose.left_ear.x;
    let y1 = pose.left_ear.y - 90;
    // right corner of hat above ear
    let x2 = pose.right_ear.x;
    let y2 = pose.right_ear.y - 90;
    // draw a triangle them connecting the points
    fill(0);
    triangle(x, y, x1, y1, x2, y2);
  }
}
