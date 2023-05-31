//custom pixals

let img; 
let sampleX = 10;
let sampleY = 10;

function preload(){
  img = loadImage('https://halliedrink.github.io/creative-coding/week2/pixels/flower.jpg');

}

function setup() {
  createCanvas(700,700);
  noStroke()
  img.loadPixels();
}

function draw() {
  background(220);

  translate(50,50);
//image(img, 0,0);

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y+= sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      fill(r,g,b);
      ellipse(x,y,sampleX,sampleY);
    }
  }


}