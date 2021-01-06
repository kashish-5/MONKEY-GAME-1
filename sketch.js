//assigning variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
//loading images& animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(600,300); 
//creating ground and monkey sprites
ground=createSprite(200,295,600,10);
ground.velocityX=-3;

  
monkey=createSprite(20,155,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.13;
  
//assigning new groups
bananaGroup=new Group();
obstacleGroup=new Group();

  
score=0;
}


function draw() {
  background("white");
  
  textSize(15);
  fill("black")
  score=Math.ceil(frameCount/frameRate())
    text("SURVIVAL TIME: "+score,400,30);



//giving velocity to the monkey as the space key is pressed
if(keyDown("space") && monkey.y>=145){
  monkey.velocityY=-8;
}
monkey.velocityY=monkey.velocityY+0.5;
  
if(ground.x<300){
  ground.x=ground.width/2;
}

//making the monkey collide with ground
monkey.collide(ground); 
  
  

  
if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.09;
  }
  
food();
obstacles();


drawSprites() 
}

//creating the food function and adding it to the group
function food(){
  if(World.frameCount%80===0){
   banana=createSprite(600,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=570;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

     bananaGroup.add(banana);
  }
}

//creating the obstacles function and adding it to the group 
function obstacles(){
  if(World.frameCount%300===0){
   obstacle=createSprite(600,275,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=570;
    monkey.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
    obstacleGroup.add(obstacle);

  }
}







