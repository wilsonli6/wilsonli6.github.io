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
  createCanvas(windowHeight, windowWidth);
  grid = create2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}