function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);

//check for collision
  if (x < 0 | x > width){
    xspeed = xspeed * -10; //reverse direction of x 
  }

x = x + xspeed; //iterate x
y = y + yspeed; //iteraate y

//circle
  circle(x,y, 50);
}
  let x = 0;
  let y = 0;
  let xspeed = 1;
  let yspeed = 1;


