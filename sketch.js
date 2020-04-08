var rect,movingRect;

function setup() {
  createCanvas(1200,800);
  rect =createSprite(400, 200, 50, 80);
  rect.shapeColor="blue";
  movingRect =createSprite(400, 100, 80, 50);
  movingRect.shapeColor="blue";

}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-rect.x<(movingRect.width + rect.width)/2 && 
  rect.x-movingRect.x<(movingRect.width + rect.width)/2 &&
  movingRect.y-rect.y<(movingRect.height + rect.height)/2 &&
  rect.y-movingRect.y<(movingRect.height + rect.height)/2){
    rect.shapeColor="red"
    movingRect.shapeColor="red"
  }else{
    rect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }


  drawSprites();
}