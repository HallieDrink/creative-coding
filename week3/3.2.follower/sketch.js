let debug = true;
let x = 0;
let y = 0;
let d = 0;
let score =10;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;



function setup() {
  createCanvas(400, 400);

  x = random(width);
  y = random(height);
}



function draw() {
  background("yellowgreen");


//distance formula
d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

//movement
x += speedx;
y += speedy;

//draw circle
circle(x,y,50);
fill("hotpink")

  if (mouseX > x){
    //right
    speedx = speedfactor;

  }else{
    //left
speedx = -speedfactor;
  }

  if (mouseY > y){
    //right
    speedy = speedfactor;

  }else{
    //left
speedy = -speedfactor;
  }


// check collision
  if (d < 25){
    score -= 1;
    x = random(width);
    y = random(height);
  }



 if (debug){
  textSize(20);
  //text("mouseX: " + mouseX, 50, 50);
  //text("mouseY; " + mouseY, 50, 80);
 // text("x: " + x, 50, 120);
  //text("y: " + y, 50, 150);
 // text("d: " + d, 50, 180);
  text("score:" + score, 50, 50);

  }
}