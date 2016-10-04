var cross;
var tongue;
var bacteria;
var float;
var r = 0;
var f = 0;

function preload(){
  cross = loadImage("imgs/cross.jpg");
  tongue = loadImage("imgs/tongue.png");
  bacteria = loadImage("imgs/bacteria.png");
  float = loadImage("imgs/float.png");

  createCanvas(1300, 750);

}

function setup() {
  imageMode(CENTER);
  image(cross, width/2,height/2);
  textSize(45);

}

function draw() {
  push();
  translate(r);
  r = r + 20;
  stroke(5);
  fill(200, 0, 0, 150);
  text("'FREEZE YOUR JEANS AND", 50, 50, r);
  text("EAT WITH YOUR FINGERS.'", 50, 100, r);
  fill(50);
  text("- answers.yahoo.com/question/index?qid=20160605220723AAqUcww", 30, 150, r);
  pop();

  frameRate(6);
  image(tongue, mouseX, mouseY);
  image(bacteria, width/2, height/2);

  push();
  rotate(f);
  f += random(0, 15);
  image(float, f);
  pop();

}
