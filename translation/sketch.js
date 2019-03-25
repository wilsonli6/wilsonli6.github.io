//translation and rotation demo


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);
  ellipse(0,0, width/3, width/3);
  ellipse(0, 0, 1, 1);
  rect(width/12, height/12, 30, 70)
  pop();
}
