function Drip(x, y, r = 8) {
  this.show = function () {
    noStroke();
    fill(90, 0, 255);
    ellipse(x, y, r * 2);
  };

  this.hits = function (flower) {
    let d = dist(x, y, flower.x, flower.y);
    if (d < r + flower.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    y = y - 5;
  };
}
