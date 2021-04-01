var movingRect,fixedRect

function setup() {

  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 fixedRect=createSprite(500,200,50,50);
 movingRect.shapeColor="blue";
 fixedRect.shapeColor="red";
}

function draw() {

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
  &&fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="red";
  }
  background(255,255,255);  
  drawSprites();
}