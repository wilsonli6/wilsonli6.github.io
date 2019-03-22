// States Variable Assignment
// Wilson Li
// March 8th, 2019
//Soccer Ball assignment
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//nature of code dot com vectors

let player, playerHeight, playerWidth, playerX, playerY, playerImage;
let state;
let playButton;
let buttonX, buttonY, buttonWidth, buttonHeight, buttonScalar;
let soccerBall, soccerBallX, soccerBallY, soccerBallWidth, soccerBallHeight, soccerBallScalar, soccerBallRadius;
let soccerBallSpeedX, soccerBallSpeedY;
let soccerNet, soccerNetX, soccerNetY, soccerNetWidth, soccerNetHeight, soccerNetScalar;
let backgroundImage;
let directionOfMovement;
let gravity, acceleration, velocity, ground;

function preload() {
  //load images
  soccerBall = loadImage("assets/soccerBall.png");
  playButton = loadImage("assets/playButton.png");
  soccerNet = loadImage("assets/net.png");
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
  //soccerBallScalar = 0.4;
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
  velocity = 0;

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
  directionOfMovement = "right"; 
  playerImage = player.facingLeft;
}

function draw() {
  background(220);
  if (state === "startScreen") {
    displayMenu();
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
  image(playerImage, playerX, playerY, playerWidth, playerHeight);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
    directionOfMovement = "left";
    playerImage = player.facingLeft;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
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
    //image(player.kickingRight, playerX, playerY, playerWidth, playerHeight);
  }
  else if (keyIsDown(32) && directionOfMovement === "left") {
    playerImage = player.kickingLeft;
    setTimeout(stopKicking, 100);
    // image(player.kickingLeft, playerX, playerY, playerWidth, playerHeight);
  }
} 

function ballIsKicked() {
  if (playerImage === player.kickingRight && Math.abs(playerX - soccerBallX) <= 126 && playerX - soccerBallX <= 50){
    ballGravity();
    soccerBallSpeedX = 20;
    soccerBallX += soccerBallSpeedX;
  }
}
if (playerImage === player.kickingLeft && Math.abs(playerX - soccerBallX) <= 126 && playerX - soccerBallX >=-50) {
  ballGravity();
  soccerBallSpeedX = -20;
  soccerBallX += soccerBallSpeedX;
}

function ballGravity() {
  acceleration = -5;
  velocity += acceleration;
  soccerBallY += velocity;

  // physics
  acceleration = 0;
  velocity += gravity;
  if (soccerBallY > ground) {
    soccerBallY = ground;
    velocity = 0;
  }
  // soccerBallY += velocity;
  // velocity += gravity;
  // if (soccerBallY > height) {
  //  Multiplying by -0.95 instead of -1 slows the square 
  //  down each time it bounces (by decreasing speed).  
  //  This is known as a "dampening" effect and is a more 
  //  realistic simulation of the real world (without it, 
  //  a ball would bounce forever).
  //   velocity = velocity * -0.95;
  //   soccerBallY = height;
  // }
}