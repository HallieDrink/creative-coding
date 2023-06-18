function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

//face1
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
fill("orange")
ellipse(200,250,50,100);

//blush
fill("red")
ellipse(125,225,50,50);
ellipse(270,225,50,50);



//face2
//base face
fill("orange");
  ellipse(600,200,250,250);

//eyes
fill("pink");
ellipse(550,150,25,75);
ellipse(650,150,25,75);

//pupils
fill("black")
ellipse(550,150,25,25);
ellipse(650,150,25,25);

//nose
fill("red");
ellipse(590,190,15,15);
ellipse(610,190,15,15);

//mouth
  fill("yellow");
  arc(600, 220, 150, 150, 0,60);



//face3
//base face
fill("yellow");
  ellipse(200,600,250,250);

//eyes
fill("red");
ellipse(150,580,25,75);
ellipse(250,580,25,75);

//pupils
fill("black");
ellipse(150,580,25,25);
ellipse(250,580,25,25);

//eyebrows
fill("orange");
rect(130,530,50,10);
rect(230,530,50,10);

//mouth
fill("pink");
noStroke();
rect(130,640, 20, 20)
rect(150,650, 20, 20)
rect(170,640, 20, 20)
rect(190,650, 20, 20)
rect(210,640, 20, 20)
rect(230,650, 20, 20)
rect(250,640, 20, 20)




//face4
//base face
fill("red");
  ellipse(600,600,250,250);

//eyes
fill("orange");
ellipse(550,550,25,75);
ellipse(650,550,25,75);

//pupils
fill("black")
ellipse(550,550,25,25);
ellipse(650,550,25,25);

//mouth
fill("pink");
rect(530,620,140,20);

//hair
fill("yellow");
rect(510,470,10,50);
rect(530,460,10,50)
rect(550,450,10,50);
rect(570,440,10,50);
rect(590,430,10,50)
rect(610,440,10,50);
rect(630,450,10,50);
rect(650,460,10,50)
rect(670,470,10,50);

}