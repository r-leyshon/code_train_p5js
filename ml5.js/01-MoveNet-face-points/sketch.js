let video;
let bodyPose;
let poses = [];
let noiseDim = 0;

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
  let noiseField = noise(noiseDim);

  if (poses.length > 0) {
    let pose = poses[0];
    //     nose
    let x = pose.nose.x;
    let y = pose.nose.y;
    fill(255, 0, 0);
    noStroke();
    circle(x, y, map(noiseField, 0.0, 1.0, 5, 100));
    //     left eye
    let x1 = pose.left_eye.x;
    let y1 = pose.left_eye.y;
    fill(0, 0, 255, map(noiseField, 0.0, 1.0, 0, 255));
    circle(x1, y1, 20);
    //     right eye
    let x2 = pose.right_eye.x;
    let y2 = pose.right_eye.y;
    circle(x2, y2, 20);
    noiseDim += 0.01;
  }
}
