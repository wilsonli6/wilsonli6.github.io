// Perlin Noise
// Wilson Li
// 3/27/19

let numberOfRects;
let time;
let rectWidth;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  time = 0;
  rectWidth = width/numberOfRects;
  generateInitialTerrain();
}

function draw() {
  background(220);
  fill(0);
  for (let i = 0; i < numberOfRects; i++) {
    rect(rects[i].x, rects[i].y, rects[i].width, rect[i].height);
  }
}

function generateInitialTerrain() {
  for (let i = 0; i < numberOfRects; i++){
    let rectHeight = noise(time) * height;
    let myRectangle = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight
    };
    rects.push(myRectangle);


    // move along the perlin noise x-axis
    time += 0.01;
  }
}