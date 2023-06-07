let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;
let x5 = 0;
let y5 = 0;
let x6 = 0;
let y6 = 0;
let x1speed = 3;
let y1speed = 3;
let x2speed = 6;
let y2speed = 6;
let x3speed = 9;
let y3speed = 9;
let x4speed = 2;
let y4speed = 2;
let x5speed = 5;
let y5speed = 5;
let x6speed = 8;
let y6speed = 8;

function setup(){
  createCanvas(500,500);
  fill("yellow");
}

function draw() {
  background(220);
  noStroke();

translate(width / 2, height / 2);

  
  ellipse(x1,y1,100);
 
  if (x1 > 150 | x1 < -150){
  x1speed = -x1speed;
  fill(random(225),100,100);
}

  if (y1 > 170 | y1 < -170){
  y1speed = -y1speed;
}

x1 += x1speed;
y1 += y1speed;

 ellipse(x2,y2,85);
 
  if (x2 > 150 | x2 < -150){
  x2speed = -x2speed;
  fill(random(245),50,100);
}

  if (y2 > 170 | y2 < -170){
  y2speed = -y2speed;
}

x2 += x2speed;
y2 += y2speed;

ellipse(x3,y3,75);
 
  if (x3 > 150 | x3 < -150){
  x3speed = -x3speed;
  fill(random(235),100,150);
}

  if (y3 > 170 | y3 < -170){
  y3speed = -y3speed;
}

x3 += x3speed;
y3 += y3speed;

ellipse(x4,y4,60);
 
  if (x4 > 150 | x4 < -150){
  x4speed = -x4speed;
  fill(random(235),100,150);
}

  if (y4 > 170 | y4 < -170){
  y4speed = -y4speed;
}

x4 += x4speed;
y4 += y4speed;

ellipse(x5,y5,50);
 
  if (x5 > 150 | x5 < -150){
  x5speed = -x5speed;
  fill(random(235),100,150);
}

  if (y5 > 170 | y5 < -170){
  y5speed = -y5speed;
}

x5 += x5speed;
y5 += y5speed;

ellipse(x6,y6,30);
 
  if (x6 > 150 | x6 < -150){
  x6speed = -x6speed;
  fill(random(235),100,150);
}

  if (y6 > 170 | y6 < -170){
  y6speed = -y6speed;
}

x6 += x6speed;
y6 += y6speed;

}

