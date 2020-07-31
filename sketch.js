var movingRectangle, fixedRectangle

function setup() {
  createCanvas(1200,800);
  movingRectangle = createSprite(400, 200, 80, 30);
  fixedRectangle = createSprite(200, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";
}


function draw() {
  background(0);
  movingRectangle.x = World.mouseX; 
  movingRectangle.y = World.mouseY;
  
  if (movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2
    && fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2){

    fixedRectangle.shapeColor = "red";
  movingRectangle.shapeColor = "red";
  }
  else {
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }
  drawSprites();
  }