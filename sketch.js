const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg1,bg;
var invisibleGround;
 var snow1 = [];
var tina,tinapic;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
  bg1=loadImage("snow3.jpg");
  tinapic = loadImage("girl.png");
  
}
function setup() {
  createCanvas(1950,950);
   
  engine = Engine.create();
  world = engine.world;
   
tina = createSprite(880,950,20,20);
tina.addImage(tinapic);
invisibleGround = createSprite(750,950,1950,4);
invisibleGround.visible = false;
}

function draw() {
 background(bg1);  
 Engine.update(engine);
  
 if(frameCount%2===0){
 snow1.push(new snow(random(0,1950),0));
}
//invisibleGround.display();
//display the particles 
for(var k = 0; k < snow1.length; k++){
snow1[k].display();
}
 
if(keyDown("right")) {
  tina.x = tina.x+5;  
}
if(keyDown("left")){

  tina.x = tina.x-5;  
}
if(keyDown("space")&& tina.y >=600  ){
  
  tina.velocityY = -12

}    
tina.velocityY = tina.velocityY+0.8;
tina.collide(invisibleGround);
  drawSprites();
}