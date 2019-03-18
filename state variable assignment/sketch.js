// States Variable Assignment
// Wilson Li
// March 8th, 2019
//Soccer Ball assignment
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//nature of code dot com vectors

let player, playerHeight, playerWidth, playerX, playerY;
let state;
let playButton;
let buttonX, buttonY, buttonWidth, buttonHeight, buttonScalar;
let soccerBall, soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight, soccerBallScalar, soccerBallRadius;
let soccerNet, soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight, soccerNetScalar;
let backgroundImage;

function preload() {
  //load images
  soccerBall = loadImage("assets/soccerBall.png");
  playButton = loadImage("assets/playButton.png");
  soccerNet = loadImage("assets/net.png");
  player = {
    kickingLeft: loadImage("assets/kickingLeft.png"),
    kickingRight: loadImage("assets/kickingRight.png"),
    facingLeft: loadImage("assets/standing.png"),
    facingRight: loadImage("assets/standing.png")
  };

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = loadImage("assets/field.png");
  //determine start screen measurements
  state = "startScreen";
  //buttonScalar = 0.3;
  buttonX = width/2;
  buttonY = height/2;
  buttonHeight = windowHeight/3.5;
  buttonWidth = windowWidth/5;

  //soccer ball measurements
  //soccerBallScalar = 0.4;
  soccerBallRadius = windowHeight/15;
  soccerBallHeight = soccerBallRadius *2;
  soccerBallWidth = soccerBallRadius *2;
  soccerBallX = 0 + soccerBallRadius;
  soccerBallY = height - soccerBallRadius;

  //soccer net measurements
  soccerNetScalar = 10;
  soccerNetHeight = windowHeight/1.2;
  soccerNetWidth = windowWidth/6;
  soccerNetX = width - soccerNetWidth/2;
  soccerNetY = height - soccerNetHeight/2;

  //player measurements
  playerHeight = windowHeight/3;
  playerWidth = windowWidth/8;
  playerX = width - playerWidth*7;
  playerY = height - playerHeight/2;
}

function draw() {
  background(220);
  if (state === "startScreen") {
    displayMenu();
  }
  if (state === "playSoccer"){
    imageMode(CORNER);
    image(backgroundImage, 0, 0, windowWidth, windowHeight);

    displayBall();
    displayNet();
    displayPlayer();
    movePlayer();
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
  imageMode(CENTER);
  image(soccerBall, soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight);
}

function displayNet() {
  imageMode(CENTER);
  image(soccerNet, soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight);
}

function displayPlayer() {
  imageMode(CENTER);
  image(player.facingRight, playerX, playerY, playerWidth, playerHeight);
}
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  //if the spacebar is pressed
  if (keyIsDown(32) && player.facingRight) {
    image(player.kickingRight, playerX, playerY, playerWidth, playerHeight);
  }
}