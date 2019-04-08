// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 2;
let grid;
let cellSize;
let autoPlay;

function setup() {
  // translate(width/2, height/2);
  createCanvas(windowHeight, windowWidth);
  cellSize = 150;
}

function draw() {
  translate(500, 200);
  background(255);
  displayGrid();
  ellipse(500, 50, 50, 50);
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


//function mousePressed() {
//   let xcoord = floor(mouseX/cellSize);
//   let ycoord = floor(mouseY/cellSize);
// }