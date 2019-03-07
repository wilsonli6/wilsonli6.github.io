// Interactive Scene
// Wilson Li
// February 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//I made it so that the shoe would switch if there was correct contact with the logo

let x = 100;
let y = 100;
let shoeX, shoeY;
let backgroundImage;
let scalar;
let whichImage;
let whichShoe;
let newShoe;
let dx, dy;
let px, py;
let shoeWidth, shoeHeight;
let shoeSwitch;
let points;

function preload() {
  //load the images
  adidas = loadImage("assets/adidas.png");
  nike = loadImage("assets/nike.png");
  puma = loadImage("assets/puma.png");
  adidasShoe = loadImage("assets/adidasShoe.png");
  pumaShoe = loadImage("assets/pumaShoe.png");
  nikeShoe = loadImage("assets/nikeShoe.png");
}
function setup() {
  createCanvas(650,650);
  backgroundImage = loadImage("assets/sneaker.png");
  scalar = 0.1;
  //choose the first image to appear
  whichImage = "adidas";
  whichShoe = ["adidasShoe", "pumaShoe", "nikeShoe"];
  newShoe = random(whichShoe);
  newShoe;
  imageScalar = 0.2;
  shoeX = width/2;
  shoeY = height/2;
  py = random(2,10);
  px = random(2,10);
  points = 0;
}

function draw() {
  imageMode(CORNER);
  image(backgroundImage, 0, 0, width, height);
  imageMode(CENTER);
  shoeSwitch;
  //move the logo
  if (whichImage === "adidas") {
    image(adidas, x, y, adidas.width*scalar, adidas.height*scalar);
  }
  if (whichImage === "nike") {
    image(nike, x, y, nike.width*scalar, nike.height*scalar);
  }
  if (whichImage === "puma") {
    image(puma, x, y, puma.width*scalar, puma.height*scalar);
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (whichShoe === "pumaShoe") {
    image(pumaShoe, shoeX, shoeY, pumaShoe.width * imageScalar, pumaShoe.height * imageScalar);
  }
  if (whichShoe === "nikeShoe") {
    image(nikeShoe, shoeX, shoeY, nikeShoe.width * imageScalar, nikeShoe.height * imageScalar)
  }
  if (whichShoe === "adidasShoe") {
    image(adidasShoe, shoeX, shoeY, adidasShoe.width * imageScalar, adidasShoe.height * imageScalar)
  }
  // move the shoe
  shoeX += px;
  shoeY += py;
  
  //check for bounce
  if (shoeX >= width || shoeX <=0) {
    px = -1 * px;
  }
    
  if (shoeY >= height || shoeY <=0) {
    py = -1 * py;
  }
  //display the shoe

  //switch the shoe depending on the contact
  function shoeSwitch(){
    if (whichShoe === "pumaShoe" && whichImage === "puma" &&
    (shoeX <= x + 5 && shoeY <= y + 5)) {
      points += 1;
      newShoe;
    }
    else if (whichShoe === "nikeShoe" && whichImage === "nike" &&
    (shoeX <= x + 5 && shoeY <= y+ 5)) {
      points += 1;
      newShoe;
    }
    else if (whichShoe === "adidasShoe" && whichImage === "adidas" &&
    (shoeX <= x + 5 && shoeY <= y + 5)) {
      points += 1;
      newShoe;
    }
    else if (shoeX <= x + 5 && shoeY <= y + 5){
      points = 0;
      newShoe;
    }
  }

  }
function keyPressed(){
  //change the logo
	if (key === "a" || key === "A"){
    whichImage = "adidas";
    scalar = 0.1;
		// image(adidas, mouseX, mouseY, adidas.width*scalar, adidas.height*scalar);
  }
  if (key === "n" || key === "N"){
    whichImage = "nike";
    scalar = 0.25;
    // image(nike, mouseX, mouseY, nike.width*scalar, nike.height*scalar);
  }
  if (key === "p" || key === "P"){
    whichImage = "puma";
    scalar = 0.16;
    // image(puma, mouseX, mouseY, puma.width*scalar, puma.height*scalar);
  }
}
