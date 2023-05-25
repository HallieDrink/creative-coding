function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
//base face
fill("pink");
  ellipse(200,200,250,250);

//eyes
fill("yellow")
ellipse(150,150,25,75);
ellipse(250,150,25,75);

//pupils
fill("black")
ellipse(150,150,25,25);
ellipse(250,150,25,25);

//mouth
fill("yellow")
ellipse(200,250,50,100);

//blush
fill("red")
ellipse(125,225,50,50);
ellipse(270,225,50,50);

}