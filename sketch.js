var m, f, a, b;



function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 80, 30);
  m.shapeColor = "blue";

  f = createSprite(200, 200, 50, 80);
  f.shapeColor = "blue";

  a = createSprite(100, 100, 20, 20);
  a.shapeColor = "blue";

  b = createSprite(200, 100, 20, 20);
  b.shapeColor = "blue";
}

function draw() {
  background("black");  

m.x = mouseX;
m.y = mouseY;


if(isTouching(m,f)){
  m.shapeColor = "red";
  f.shapeColor = "red";
}
else{
  m.shapeColor = "blue";
  f.shapeColor = "blue";
}
  drawSprites();
}

