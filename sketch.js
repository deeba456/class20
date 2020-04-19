var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="blue";
  rect2=createSprite(400,200,30,30);
  rect2.shapeColor="red";
  rect1.debug=true;
  rect2.debug=true;
}

function draw() {
  background(0,0,0); 
  rect2.y=World.mouseY;
  rect2.x=World.mouseX; 
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.shapeColor="green";
    rect2.shapeColor="blue";
  }
  else{
    rect1.shapeColor="blue";
    rect2.shapeColor="red";
  }
  drawSprites();
}