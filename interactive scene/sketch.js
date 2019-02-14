// Interactive Scene
// Wilson Li
// February 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let backgroundImage
let adidas;
let nike;
let puma;
let scalar;

function preload() {
  adidas = loadImage("assets/adidas.png");
}
function setup() {
  backgroundImage = loadImage("assets/sneaker.png");
  createCanvas(650,650);
  scalar = 0.1;
}

function draw() {
  // background(backgroundImage);
  imageMode(CORNER);
  image(backgroundImage, 0, 0, width, height);
  
  imageMode(CENTER);
  image(adidas, mouseX, mouseY, adidas.width*scalar, adidas.height*scalar);
}
function keyPressed(){
	if (key === "a" || key === "A"){
		image(adidas, mouseX, mouseY, adidas.width*scalar, adidas.height*scalar);
  }
  if (key === "n" || key === "N"){
    image(nike, mouseX, mouseY, nike.width*scalar, nike.height*scalar);
  }
    if (key === "p" || key === "P"){
    image(puma, mouseX, mouseY, puma.width*scalar, puma.height*scalar);
  }
}