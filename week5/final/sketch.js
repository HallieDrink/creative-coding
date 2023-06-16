var img;

function preload(){
img = loadImage('https://halliedrink.github.io/creative-coding/week5/final/sad.jpg');
img1 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/happy.jpg');
img2 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/tired.jpg');
img3 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/mad.jpg');
img4 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/food.jpg');
img5 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/drink.jpg');
img6 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/toilet.jpg');
img7 = loadImage('https://halliedrink.github.io/creative-coding/week5/final/play.jpg');


}

function setup() {
  createCanvas(500, 3100);
  
}

function draw() {
  background(220);

//phrases
  textSize(25);
  textFont("block")
  text("I AM SAD", 200, 50);
  text("I AM HAPPY", 190, 400);
  text("I AM TIRED", 185, 800);
  text("I AM MAD", 200, 1200);
  text("I WANT A SNACK", 170, 1600);
  text("I WANT A DRINK", 170, 2000);
  text("BATHROOM", 200, 2400);
  text("RECESS", 200, 2800);

//images 
  image(img, 130 ,75);
  image(img1, 130, 450)
  image(img2, 130, 850);
  image(img3, 130, 1250);
  image(img4, 80, 1650);
  image(img5, 100, 2050);
  image(img6, 110, 2450);
  image(img7, 80, 2850);



}

//For this final project, I decided to use what I have learned over the past 5 weeks 
//to make something I can implement in my life. This summer I am a teacher’s aid for a special 
//education classroom and I have a non-verbal student who I would love to be able to communicate
// with.  I decided that I could make something that she could use to tell me how she is feeling 
//and what she wants adding a picture with each phrase as she has not yet learned to read. I 
//decided I would go with 4 emotions, sad, happy, tired, and mad, and a drawing of a face to 
//represent that emotion. This way she can point to one and I know what she is feeling at the
// moment. I also included 2 “I want” statements with pictures of drinks and snacks that she 
//brings in her lunchbox. I also included a bathroom phrase and picture she can let us know when
// she needs to be changed and recess or play that way, she can let us know when she needs a break.
// I first stared this by designing on paper what I wanted my project to look like and what phrases
//i wanted to add. After doing that I used my ipad to draw all the images that I used. 
//The hardest part of this project was figuring out the spacing and dimmensions of where stuff 
//needed to go and how big or small it needed to be.  














