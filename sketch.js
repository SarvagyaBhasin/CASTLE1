var wall1,wall2,wall3,wall4;
var gate;
var castle1,castle2,castle3;
var window;

function setup() {
  createCanvas(1600,800);

  wall4 = createSprite(550, 695, 400, 500);
  wall4.shapeColor = "white";

  castle1 = createSprite(805,695,100,700);
  castle1.shapeColor = "white";

  castle2 = createSprite(295,695,100,700);
  castle2.shapeColor = "white";

  castle3 = createSprite(550,125,100,150);
  castle3.shapeColor = "white";

  wall1 = createSprite(550,350,300,300);
  wall1.shapeColor = "white";

  wall2 = createSprite(95,695,300,400);
  wall2.shapeColor = "white";

  wall3 = createSprite(1005,695,300,400);
  wall3.shapeColor = "white";

 gate = createSprite(550,695,100,200);
 gate.shapeColor = "black"; 
 
 window = createSprite(550,350,50,50);
 window.shapeColor = "black";


}

function draw() {
  background("black"); 
  fill("white");
  triangle(755,345,805,295,855,345); 

  fill("white")
  triangle(245,345,295,295,345,345);

  fill("white")
  triangle(500,50,550,0,600,50);

  drawSprites();
}