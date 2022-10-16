function setup() {
    createCanvas(400, 400);
    // we want a print to console at the start, so pop it in the canvas setup
    print("Hello!");
  }
  
  function draw() {
    background(220);
    fill(255, 0, 0, 50);
    // really nice error in p5 editor console:
    //ReferenceError: nostroke is not defined
    //p5.js says: [sketch.js, line 13] It seems that you may have accidentally written
    //"nostroke" instead of "noStroke". Please correct it to noStroke if you wish to use
    //the function from p5.js. (http://p5js.org/reference/#/p5/noStroke)
    nostroke();
    rectMode(CENTER)
    // semicolons are somewhat optional, they disgnify the end of the line, good
    //practice to use
    rect(200, 200, 200, 200);
  }
  