var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleimg,leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  createApples()
  createLeaves()
  drawSprites();
}
function createApples(){
  if(frameCount%60===0){
  apple = createSprite(100,10,40,10)
  apple.velocityY=3
  apple.addImage(appleimg)
  apple.scale = 0.1
  apple.x=Math.round(random(10,400))
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }
}
function createLeaves(){
  if(frameCount%90===0){
  leaf = createSprite(100,10,40,10)
  leaf.velocityY=3
  leaf.addImage(leafimg)
  leaf.scale = 0.1
  leaf.x=Math.round(random(10,400))
  leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }
}