// Arrays Assignment
// Wilson Li
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let player, playerHeight, playerWidth, playerX, playerY, playerImage;
let state;
let playButton;
let buttonX, buttonY, buttonWidth, buttonHeight, buttonScalar;
let soccerBall, soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight, soccerBallScalar, soccerBallRadius;
let soccerBallSpeedX, soccerBallSpeedY;
let soccerNet, soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight, soccerNetScalar;
let soccerGoal, soccerGoalX, soccerGoalY, soccerGoalWidth, soccerGoalHeight;
let backgroundImage;
let directionOfMovement;
let gravity, acceleration, xVelocity, yVelocity, ground;

function preload() {
  //load images
  soccerBall = loadImage("assets/soccerBall.png");
  playButton = loadImage("assets/playButton.png");
  soccerNet = loadImage("assets/net.png");
  soccerGoal = loadImage("assets/net.png");
  // I organized the player into one object to make it easier to manage
  player = {
    kickingRight: loadImage("assets/kickingLeft.png"),
    kickingLeft: loadImage("assets/kickingRight.png"),
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
  soccerBallRadius = windowHeight/15;
  soccerBallHeight = soccerBallRadius *2;
  soccerBallWidth = soccerBallRadius *2;
  soccerBallX = 0 + soccerBallRadius;
  ground = height - soccerBallRadius;
  soccerBallY = ground;
  soccerBallSpeedX = 0;
  soccerBallSpeedY = 0;
  gravity = 0.3;
  acceleration = 0;
  yVelocity = 0;
  xVelocity = 0;

  //soccer net (right) measurements
  soccerNetScalar = 10;
  soccerNetHeight = windowHeight/1.2;
  soccerNetWidth = windowWidth/6;
  soccerNetX = width - soccerNetWidth/2;
  soccerNetY = height - soccerNetHeight/2;

  // soccer net (left) measurements
  soccerGoalHeight = windowHeight/1.2;
  soccerGoalWidth = windowWidth/6;
  soccerGoalX = width - soccerGoalWidth/2;
  soccerGoalY = height - soccerGoalHeight/2;

  //player measurements
  playerHeight = windowHeight/3;
  playerWidth = windowWidth/8;
  playerX = width - playerWidth*7;
  playerY = height - playerHeight/2;
  directionOfMovement = "right"; 
  playerImage = player.facingLeft;
}

function draw() {
  background(220);
  if (state === "startScreen") {
    displayMenu();
    playerX = width - playerWidth*7;
    playerY = height - playerHeight/2;
    soccerBallX = 0 + soccerBallRadius;
    soccerBallY = ground;
  }
  if (state === "playSoccer"){
    imageMode(CORNER);
    image(backgroundImage, 0, 0, windowWidth, windowHeight);
    displayPlayer();
    displayBall();
    displayNet();
    movePlayer();
    animatePlayer();
    ballIsKicked();
    ballGravity();
    boundaries();
    goalScored();
  }
}

// Eventually, I want to display a 'congratulations' when you score, but I tried to do that and it didn't work for some reason. Hence, I decided to leave it out for now.
// if (state === "celebration") {
//   displayCongrats();
// }

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
  image(playerImage, playerX, playerY, playerWidth, playerHeight);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 10;
    directionOfMovement = "left";
    playerImage = player.facingLeft;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 10;
    directionOfMovement = "right";
    playerImage = player.facingRight;
  }
}

function stopKicking() {
  if (directionOfMovement === "left") {
    playerImage = player.facingLeft;
  }
  else if (directionOfMovement === "right") {
    playerImage = player.facingRight;
  }
}

function animatePlayer() {
  //if the spacebar is pressed
  if (keyIsDown(32) && directionOfMovement === "right") {
    playerImage = player.kickingRight;
    setTimeout(stopKicking, 100);
  }
  else if (keyIsDown(32) && directionOfMovement === "left") {
    playerImage = player.kickingLeft;
    setTimeout(stopKicking, 100);
  }
} 

function ballIsKicked() {
  if (playerImage === player.kickingRight && Math.abs(playerX - soccerBallX) <= 126 && playerX - soccerBallX <= 50
  && Math.abs(playerY - soccerBallY) <= 90){
    soccerBallSpeedX = 20;
    soccerBallX += soccerBallSpeedX;
    acceleration = -5;
    if (soccerBallY < ground) {
      xVelocity = 15;
    }
  }
  if (playerImage === player.kickingLeft && Math.abs(playerX - soccerBallX) <= 126 && playerX - soccerBallX >=-50
  && Math.abs(playerY - soccerBallY) <= 90) {
    soccerBallSpeedX = -20;
    soccerBallX += soccerBallSpeedX;
    acceleration = -2;
    //the left kick is not as powerful
    if (soccerBallY < ground) {
      xVelocity = -3;
    }
  }
}

function ballGravity() {
  yVelocity += acceleration;
  soccerBallY += yVelocity;
  soccerBallX += xVelocity;

  // physics
  acceleration = 0;
  yVelocity += gravity;
  if (soccerBallY > ground) {
    soccerBallY = ground;
    //this allows for the ball to bounce
    yVelocity = yVelocity * -0.3;
  }
  if (soccerBallY >= ground) {
    xVelocity = 0;
  }
}

function boundaries() {
  //so the ball can't leave the screen
  if (soccerBallX > width) {
    soccerBallX = width - soccerBallWidth;
    xVelocity = xVelocity * -1;
  }
  if (soccerBallX < 0) {
    soccerBallX = 0 + soccerBallWidth;
    xVelocity = xVelocity * -1;
  }
  if (soccerBallY < (0 + soccerBallHeight/2)) {
    yVelocity = yVelocity * -1;
  }
  
  //so the player can't leave the screen
  if (playerX > width) {
    playerX = width;
  }
  if (playerX < 0) {
    playerX = 0 - playerX/2;
  }

  //net boundaries
  if (Math.abs(soccerBallX - soccerNetX) <= 20){
    xVelocity = 0;
  }
   
  if (Math.abs(soccerBallX - soccerNetX) <= 20 && soccerBallY < height/4){
    xVelocity = -5;
    yVelocity = yVelocity *-1;

  }
}

function goalScored() {
  if (Math.abs(soccerBallX - soccerNetX) <= 40 && soccerBallY > height/4){
    state = "startScreen";
  }
}