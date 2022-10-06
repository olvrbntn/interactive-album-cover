// instructions to interact-
// when the mouse moves to the left - rotate counter clockwise
// when the mouse moves to the right - rotate clockwise

let gap = 10;
let cirNum = 40;
let cirSize = 20;
let angle=0;
let ptNum = 100;
let rectSize = 600;
// setup is to initiate the whole program
// this only runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}


// draws loops forever
function draw() {
//   having the background in the draw function as opposed to the setup function allows the canvas to be refreshed to black every time it draws, creating motion. (if it were in the setup function, then you'd see the trace of the cursor)
  background('black');
//   a customized shape for mouse
  noCursor();
  noStroke();
  fill('white');
  circle(mouseX, mouseY,5);
  
//   main graph
  push();
  translate(width/2, height/2);
  rotate(angle);
  // angle = map(mouseX,0,width,-1,1);
  angle = angle+map(mouseX,0,width,-0.1,0.1);
  noFill();
  stroke('white');
  strokeWeight(1);
  //   for loop:
  // 1.where to start, 
  // 2.where to end, 
  // 3.how much to increment each time
  for(let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle*i,360-angle/2);
  }
  pop();
  
  
//   title & subtitle
  push();
  translate(width/2,height-180);
  noStroke();
  textFont('Arial');
  textSize(15);
  textAlign(CENTER, CENTER);
  text('Cycles',0,0);
  textSize(10);
  text('an exploration of sound',0,20);
  pop();
  
//   border of the album cover
  push();
  translate(width/2, height/2)
  noFill();
  stroke('white');
  strokeWeight(2);
  rectMode(CENTER);
  rect(0,0,rectSize, rectSize);
  
  //   random noise as background
  stroke('white');
  strokeWeight(1)
  for(let i=0; i<ptNum; i++){
    point(random(-rectSize/2,rectSize/2),random(-rectSize/2,rectSize/2));
  }
  pop();
  
}

