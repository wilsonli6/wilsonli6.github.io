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
let cellPictureHeight, cellPictureWidth;
let txt;
let backgroundImage;
let state;

function preload() {
  //load images
  fastAbility = loadImage("assets/fast.png");
  tallAbility = loadImage("assets/tall.png");
  strongAbility = loadImage("assets/strong.png");
  shootingAbility = loadImage("assets/shoot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = loadImage("assets/stadium.png");
  state = "choice";
  txt = "🔥Select Your Ability🔥";
  cellSize = 150;
  xOffset = width/2.5;
  yOffset = height/3;
  cellPictureWidth = cellSize;
  cellPictureHeight = cellSize;
}

function draw() {
  background(225);
  xcoord = floor((mouseX-xOffset)/cellSize);
  ycoord = floor((mouseY-yOffset)/cellSize);
  if (state === "choice") {
    checkCursor();
    image(backgroundImage, 0, 0, width, height);
    displayText();
    translate(xOffset, yOffset);
    displayGrid();
    displayAbilities();
  }
    // checkCursor();
    // image(backgroundImage, 0, 0, width, height);
    // displayText();
    // translate(xOffset, yOffset);
    // displayGrid();
    // imageMode(CORNER);
    // image(fastAbility, 0, 0, cellPictureWidth, cellPictureHeight);
    // image(tallAbility, 1*cellSize, 1*cellSize, cellPictureWidth, cellPictureHeight);
    // image(strongAbility, 1*cellSize, 0, cellPictureWidth, cellPictureHeight);
    // image(shootingAbility, 0, 1*cellSize, cellPictureWidth, cellPictureHeight);
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
  // if (xcoord === 0 && ycoord === 0) {
  //   chooseFast();
  // }
}

function checkCursor() {
  if (xcoord >= 0 && xcoord <= 1 && ycoord >= 0 && ycoord <= 1) {
    cursor("pointer");
  }
  else {
    cursor(ARROW);
  }
}

function displayText() {
  textSize(40);
  text(txt, width/2.7, height/5);
}

function displayAbilities() {
  imageMode(CORNER);
  image(fastAbility, 0, 0, cellPictureWidth, cellPictureHeight);
  image(tallAbility, 1*cellSize, 1*cellSize, cellPictureWidth, cellPictureHeight);
  image(strongAbility, 1*cellSize, 0, cellPictureWidth, cellPictureHeight);
  image(shootingAbility, 0, 1*cellSize, cellPictureWidth, cellPictureHeight);
}