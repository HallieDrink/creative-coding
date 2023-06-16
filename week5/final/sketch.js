var img;

function preload(){
img = loadImage(sad.jpg);

}

function setup() {
  createCanvas(500, 4400);
  
}

function draw() {
  background(220);

//phrases
  textSize(25);
  textFont("block")
  text("I AM SAD", 200, 50);
  text("I AM HAPPY", 200, 550);
  text("I AM TIRED", 200, 1100);
  text("I AM MAD", 200, 1650);
  text("I WANT A SNACK", 170, 2200);
  text("I WANT A DRINK", 170, 2750);
  text("BATHROOM", 200, 3300);
  text("RECESS", 200, 3850);

//images for sad, haappy, tired, mad
  image(img, 50 ,50);








}