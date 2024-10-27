let video;
let bodyPose;
let poses = [];
let connections;
let confidence_threshold = 0.2;

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
  connections = bodyPose.getSkeleton();
}

function draw() {
  image(video, 0, 0);

  if (poses.length > 0) {
    let pose = poses[0];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let keypoint = pose.keypoints[i];
      noStroke();
      fill(0, 0, 255, 150);
      // don't draw all 17 points all the time, use confidence score to
      // filter out
      if (keypoint.confidence > confidence_threshold) {
        circle(keypoint.x, keypoint.y, 20);
      }

      // draw a skeleton
      for (let i = 0; i < connections.length; i++) {
        let connection = connections[i];
        let a = connection[0];
        let b = connection[1];
        let keyPointA = pose.keypoints[a];
        let keyPointB = pose.keypoints[b];
        // Only draw skeleton if confidence threshold is exceeded
        if (
          (keyPointA.confidence > confidence_threshold) &&
          (keyPointB.confidence > confidence_threshold)
        ) {
          stroke(0, 255, 0);
          strokeWeight(10);
          line(keyPointA.x, keyPointA.y, keyPointB.x, keyPointB.y);
        }
      }
    }
  }
}
