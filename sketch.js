//Bug1 - Assign proper names to the variables
var ballImg,paddleImg;

function preload() {
  ballImg = loadImage("ball.png");
  paddleImg=loadImage("paddle.png")
}

function setup() {
  createCanvas(400, 400);
  
  ball=createSprite(60,200,20,20);
  ball.addImage (ballImg); 
  
  //Bug2 - Assign Initial velocity to the ball,to make the ball move     when the game starts
  
  ball.velocityX=9; 
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleImg)
  
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  //Bug3 - Make the ball to bounce off the paddle
  ball.bounceOff(paddle);
  
  //Bug4 - call the explosion function when ball collides with paddle
  paddle.collide(edges,explosion);
  
  //Bug5 - Make the paddles to move in right direction
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

