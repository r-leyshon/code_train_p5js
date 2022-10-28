function setup() {
  createCanvas(400, 400);
  background(0);
  let km = milesToKm(26.3);
  fill(255);
  text(km, 200, 200);

  let km2 = milesToKm(100);
  text(km2, 200, 300);
}


function milesToKm(miles) {
  let km = miles * 1.6;
  return km;
}
