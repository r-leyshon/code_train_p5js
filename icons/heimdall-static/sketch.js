function setup() {
    let y = 10;
    createCanvas(420, 470);
    // castle
    strokeWeight(6);
    fill(255);
    stroke(color("#00456B"));
    quad(115, y+100, 285, y+100, 300, y+250, 100, y+250); //castle building
    // parapets
    rect(95, y+50, 210, 50);
    rect(95, y, 50, 50);
    rect(175, y, 50, 50);
    rect(255, y, 50, 50);
    fill(color("#00456B"));
    // door
    rect(175, 200, 50, 50);
    angleMode(DEGREES);
    arc(200, 200, 50, 50, 180, 360, PIE);
    // rainbow
    fill(color("#F15D21"));
    rect(5, 250, 405, 50);
    fill(color("#EC0289"));
    rect(5, 300, 405, 50);
    fill(color("#B2BB1C"));
    rect(5, 350, 405, 50);
    // masking lines
    noStroke();
    fill("white");
    rect(98, y+45, 44, 10);
    rect(178, y+45, 44, 10);
    rect(258, y+45, 44, 10);
    rect(118, y+95, 164, 10);
    // logo nm
    fill(color("#00456B"));
    textSize(60);
    text("Heimdall", 90, 460);
  }
  
  function draw() {}
  