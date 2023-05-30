//custom pixals

let img; 

function preload(){
  img = loadImage('https://halliedrinkard.com/wp-content/uploads/2023/01/IMG_5057_2-1536x2048.jpg');

}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

translate(100,100);
image(img, 0,0);

}