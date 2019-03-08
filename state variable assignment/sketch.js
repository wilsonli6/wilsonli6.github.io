// States Variable Assignment
// Wilson Li
// March 8th, 2019
//Soccer Ball assignment
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let soccerBall;
let state;
let playButton;
let buttonX, buttonY, buttonWidth, buttonHeight;
let buttonScalar;

function preload() {
  soccerBall = loadImage("assets/soccerBall.png");
  playButton = loadImage("assets/playButton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonScalar = 0.3;
  state = "startScreen";
  buttonX = width/2;
  buttonY = height/2;
}

function draw() {
  background(220);
  if (state === "startScreen") {
    displayMenu();
  }
}

function displayMenu() {
  imageMode(CENTER);
  playButton(buttonX, buttonY, buttonWidth, buttonHeight);
}

function clickedOnButton(x, y) {
  return x >= buttonX - buttonWidth/2 &&
				 x <= buttonX + buttonWidth/2 &&
				 y >= buttonY - buttonHeight/2 &&
				 y <= buttonY + buttonHeight/2;
}