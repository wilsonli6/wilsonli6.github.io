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
let fastAbility, tallAbility, strongAbility, shootingAbility;
let xcoord, ycoord;

function preload() {
  //load images
  fastAbility = loadImage("assets/fast.png");
  tallAbility = loadImage("assets/tall.png");
  strongAbility = loadImage("assets/strong.png");
  shootingAbility = loadImage("assets/shoot.png");
}

function setup() {
  // translate(width/2, height/2);
  createCanvas(windowWidth, windowHeight);
  cellSize = 150;
  xOffset = width/2.5;
  yOffset = height/3;
}

function draw() {
  translate(xOffset, yOffset);
  xcoord = floor((mouseX-xOffset)/cellSize);
  ycoord = floor((mouseY-yOffset)/cellSize);
  background(225);
  displayGrid();
  checkCursor();
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

function checkCursor() {
  if (xcoord >= 0 && xcoord <= 1 && ycoord >= 0 && ycoord <= 1) {
    cursor("pointer");
  }
  else {
    cursor(ARROW);
  }
}