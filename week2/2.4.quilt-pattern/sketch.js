//Quilt Sketch
//https://www.internationalquiltmuseum.org/quilt/19970070181 

function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

  translate(100,100);
  rect(0,0,1000,1000);

 for (let x = 0; x < 10; x++){
  for (let y= 0; y < 10; y++){
    
    //checkeer board condition
    if ((y + x) % 2 == 0){
      push();
      translate(x * 100, y * 100);
      fill("lightgreen")
      rect(0,0,100,100);
    
    fill("hotpink");
      rect(10,10,75,75);

      fill("yellow");
        rect(20,20,50,50);

        fill("lightgreen");
        rect(30,30,25,25);

        fill("hotpink");
        rect(40,40,10,10);

      pop();

    }else{
      push();
      translate(x * 100, y * 100);
      fill("hotpink");
      rect(0,0,100,100);


    fill("lightgreen");
      rect(10,10,75,75);

      fill("lightblue");
        rect(20,20,50,50);

        fill("hotpink");
        rect(30,30,25,25);

        fill("lightgreen");
        rect(40,40,10,10);
      pop();
}



    }
  }
}