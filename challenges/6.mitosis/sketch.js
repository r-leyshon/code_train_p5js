let cells = [];

function setup() {
  createCanvas(700, 700);

  for (let i = 0; i < 10; i++) {
    cells.push(new Cell());
  }
}

function draw() {
  background(200);
  for (let i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed() {
  // looping forward through the array created many copies with one click. The new additions also got checked and clicked on.
  // looping backwards meant that new additions didn't get clicked.
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}
