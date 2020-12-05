var fixedRect, movingRect;

var object1,object2;

var car;

  function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(100,400,50,50);
  car.velocityX = 3;
}

  function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  ;
  if(isTouching(car,fixedRect))
  {
    car.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  bounceOff(car,fixedRect);
  drawSprites();
}

function bounceOff(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
   && object2.x - object1.x < object2.width/2 + object2.width/2)  
   {
  
  object1.velocityX = -1 * object1.velocityX;
}
  else if (object1.y - object2.y < object2.height/2 + object1.height/2 
  && object2.y - object1.y < object2.height/2 + object1.height/2)
{
  object1.velocityY = -1 * object1.velocityY;
 }
}

  function isTouching(object1, object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
  return true;
}
  else 
{
  return false;
 }
}