// States Variable Assignment
// Wilson Li
// March 8th, 2019
//Soccer Ball assignment
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let soccerBall;
let soccerNet;
let state;
let playButton;
let buttonX, buttonY, buttonWidth, buttonHeight;
let buttonScalar;
let soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight;
let soccerBallScalar;
let soccerBallRadius;
let soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight;
let soccerNetScalar;
let backgroundImage;

function preload() {
  //load images
  soccerBall = loadImage("assets/soccerBall.png");
  playButton = loadImage("assets/playButton.png");
  soccerNet = loadImage("assets/net.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = ("assets/field.png");

  //determine start screen measurements
  state = "startScreen";
  buttonScalar = 0.3;
  buttonX = width/2;
  buttonY = height/2;
  buttonHeight = windowHeight/4;
  buttonWidth = windowWidth/5;

  //soccer ball measurements
  soccerBallScalar = 0.4;
  soccerBallRadius = windowHeight/10;
  soccerBallHeight = soccerBallRadius *2;
  soccerBallWidth = soccerBallRadius *2;
  soccerBallX = 0 + soccerBallRadius;
  soccerBallY = height - soccerBallRadius;

  //soccer net measurements
  soccerNetScalar = 2.5;
  soccerNetHeight = windowHeight/4;
  soccerNetWidth = windowWidth/8;
  soccerNetX = width - soccerNetWidth/2;
  soccerNetY = height - soccerNetHeight/2;
}

function draw() {
  background(220);
  if (state === "startScreen") {
    displayMenu();
  }
  if (state === "playSoccer"){
    displayBall();
    displayNet();
    imageMode(CORNER);
    image(backgroundImage, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state === "startScreen") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "playSoccer";
    }
  }
}
function clickedOnButton(x, y) {
  return x >= buttonX - buttonWidth/2 &&
				 x <= buttonX + buttonWidth/2 &&
				 y >= buttonY - buttonHeight/2 &&
				 y <= buttonY + buttonHeight/2;
}

function displayMenu() {
  imageMode(CENTER);
  image(playButton, buttonX, buttonY, buttonWidth, buttonHeight);
}

function displayBall() {
  image(soccerBall, soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight);
}

function displayNet() {
  image(soccerNet, soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight);
}