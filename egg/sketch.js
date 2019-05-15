// Circle Recursion


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  egg(width/2, width/2);
}

function egg(x, radius) {
  let theGray = map(radius, 50, width/2, 0, 255);
  fill(theGray);
  ellipse(x, height/2, radius*2, radius*2);

  if (radius > 50) {
    egg(x-radius/2, radius/2);
    egg(x+radius/2, radius/2);
  }
}