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
      fill("darkblue")
      rect(0,0,100,100);
    
    fill("white");
      rect(10,10,75,75);

      fill("darkblue");
        rect(20,20,50,50);

        fill("white");
        rect(30,30,25,25);

        fill("darkblue");
        rect(40,40,10,10);

      pop();

    }else{
      push();
      translate(x * 100, y * 100);
      fill("white");
      rect(0,0,100,100);


    fill("darkblue");
      rect(10,10,75,75);

      fill("white");
        rect(20,20,50,50);

        fill("darkblue");
        rect(30,30,25,25);

        fill("white");
        rect(40,40,10,10);
      pop();
}



    }
  }
}