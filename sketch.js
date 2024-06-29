let a = 0;
let d = 0;
let r = 2;
let finalA = 0;
let easing = 0.017;
let win = false;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  finalA = r*360 + random(0,360);
  textAlign(CENTER,CENTER);
  textSize(24);
}

function draw() {
  background(220);
  
  d = finalA-a;
  a += d*easing;
  
  push();
  translate(width/2,height/2);
  rotate(a);
  fill('red');
  square(-40,-40,80);
  
  fill('green');
  triangle(0,0,40,-5,40,5);
  pop(); 
  
  triangle(width/2+35,height/2, width/2+60,height/2-10, width/2+60,height/2+10 );
  
  if(d<5){
    if(finalA > r*360 && finalA < r*360 + 10 ||finalA > r*360 + 350 && finalA < r*360 + 360){
      text('You won!', width/2,height/5);
    }else{
      text('You lost!', width/2,height/5);      
    } 
  }
}
