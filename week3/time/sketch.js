let x_hour = 50;
let x_minute = 50;
let x_second = 50;


function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(220);

//textSize(25);
  //text("hour: " + hour(), 50, 50);
 // text("minute: " + minute(), 50, 75);
 // text("second: " + second(), 50, 100);
  //text("millisecond: " + millis(), 50, 125);

//12 circles increasing to tell hour
push();
fill("hotpink")
circle(10,50,20,20)
circle(35,50,25,25)
circle(65,50,30,30)
circle(100,50,35,35)
circle(140,50,40,40)
circle(185,50,45,45)
circle(235,50,50,50)
circle(290,50,55,55)
circle(350,50,60,60)
circle(415,50,65,65)
circle(485,50,70,70)
circle(560,50,75,75)
pop();

//59 circles to tell seconds
push();
fill("lightblue")
circle(10,150,10,10)
circle(20,150,10,10)
circle(30,150,10,10)
circle(40,150,10,10)
circle(50,150,10,10)
circle(60,150,10,10)
circle(70,150,10,10)
circle(80,150,10,10)
circle(90,150,10,10)
circle(100,150,10,10)
circle(110,150,10,10)
circle(120,150,10,10)
circle(130,150,10,10)
circle(140,150,10,10)
circle(150,150,10,10)
circle(160,150,10,10)
circle(170,150,10,10)
circle(180,150,10,10)
circle(190,150,10,10)
circle(200,150,10,10)
circle(210,150,10,10)
circle(220,150,10,10)
circle(230,150,10,10)
circle(240,150,10,10)
circle(250,150,10,10)
circle(260,150,10,10)
circle(270,150,10,10)
circle(280,150,10,10)
circle(290,150,10,10)
circle(300,150,10,10)
circle(310,150,10,10)
circle(320,150,10,10)
circle(330,150,10,10)
circle(340,150,10,10)
circle(350,150,10,10)
circle(360,150,10,10)
circle(370,150,10,10)
circle(380,150,10,10)
circle(390,150,10,10)
circle(400,150,10,10)
circle(410,150,10,10)
circle(420,150,10,10)
circle(430,150,10,10)
circle(440,150,10,10)
circle(450,150,10,10)
circle(460,150,10,10)
circle(470,150,10,10)
circle(480,150,10,10)
circle(490,150,10,10)
circle(500,150,10,10)
circle(510,150,10,10)
circle(520,150,10,10)
circle(530,150,10,10)
circle(540,150,10,10)
circle(550,150,10,10)
circle(560,150,10,10)
circle(570,150,10,10)
circle(580,150,10,10)
circle(590,150,10,10)
pop();



//draw circles
push();
noStroke();
fill("yellowgreen");
x_hour = map(hour(), 0, 23, 10, 560);
circle(x_hour, 100,40);
fill("yellow")
x_minute = map(minute(),0, 59, 10, 560);
circle(x_minute, 210,20);
fill("orange")
x_second = map(second(),0, 59, 10, 560);
circle(x_second, 200,20);

pop();





}






