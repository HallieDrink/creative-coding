var img;

function preload(){
img = loadImage('https://halliedrink.github.io/creative-coding/week5/final/sad.jpg');
img1 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/happy.jpg');
img2 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/tired.jpg');
img3 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/mad.jpg');
img4 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/hungry.jpg');
img5 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/drink.jpg');
img6 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/toilet.jpg');
img7 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/play.jpg');


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
  text("I AM HAPPY", 200, 350);
  text("I AM TIRED", 200, 700);
  text("I AM MAD", 200, 1050);
  text("I WANT A SNACK", 170, 1400);
  text("I WANT A DRINK", 170, 1750);
  text("BATHROOM", 200, 2100);
  text("RECESS", 200, 2450);

//images 
  image(img, 110 ,75);
  image(img1, 110, 400)
  image(img2, 110, 750);
  image(img3, 110, 1100);
  image(img4, 80, 1450);
  image(img5, 100, 1800);
  image(img6, 110, 2150);
  image(img7, 80, 2500);







}