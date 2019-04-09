// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 2;
let cellSize;
let xOffset;
let yOffset;

function setup() {
  // translate(width/2, height/2);
  createCanvas(windowWidth, windowHeight);
  cellSize = 150;
  xOffset = width/2.5;
  yOffset = height/3;
}

function draw() {
  translate(xOffset, yOffset);
  background(225);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function mousePressed() {
  let xcoord = floor((mouseX-xOffset)/cellSize);
  let ycoord = floor((mouseY-yOffset)/cellSize);
  console.log(xcoord, ycoord);
}