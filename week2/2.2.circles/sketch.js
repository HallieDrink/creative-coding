function setup() {
  createCanvas(1200, 1200);
noLoop();
}

function draw() {
  background(220);

//grid out of corner
translate(100,100);


  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y +=1) {
      push();


//move circles
    translate(x * 150, y * 150);

//line thickness
    strokeWeight( random(6,20));

//line color
    stroke(random(0,255),165,12);

//fill color
    fill(random(0,255),127,201);

//draw circles
    ellipse(0,0,random(50,150))



      pop();
    }
  }
}